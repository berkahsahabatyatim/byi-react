import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import AdminSeparator from '../../../../src/component/AdminSeparator';
import { Button, TextField } from '@mui/material';
import { app, auth, db } from '../../../../src/service/firebase';
import { addDoc, collection, getDocs, getFirestore, query, Timestamp, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const editArtikel = (path) => {
    return '/admin/article/edit/'+path;
}

const ReactRTE = dynamic(() => import("../../../../src/component/RichTextEditor.tsx"), {
    ssr: false,
});

export async function getStaticPaths() {
    const querySnapshot = await getDocs(collection(getFirestore(app), "article"))
    const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
    const urls = data.map((e) => ({ url: e.url }))
    urls.push({url: 'new'})
    const paths = urls.map((post) => ({
        params: { id: post.url },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let output = ''
    const q = query(collection(getFirestore(app), "article"), where("url", "==", params.id));
    const list = await getDocs(q)
    const data = list.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    if (data.length > 0) {
        const { title, content } = data[0]
        output = { title, content }
    } else if (params.id === 'new') {
        output = { title: '', content: '' }
    } else {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { props: { data: output } }
}

export default function ArticleEditor({ data }) {
    const { content, title, id } = data
    const [_title, setValue] = useState('')
    const [_content, setContent] = useState('')

    const handleCallback = (childData) => {
        console.log('onchangg '+childData)
        setContent(childData)
    }

    useEffect(() => {
        setValue(title)
        setContent(content)
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const update = () => {
        const obj = {
            id,
            content: _content,
            title: _title,
        }
        console.log('ini cuy', _content)
        updateData(obj)
    }

    return <div className='mx-5'>
        <AdminSeparator />
        <Link href='/admin'><h3>Artikel Editor</h3></Link>
        <br />
        <TextField
            value={_title}
            onChange={handleChange}
            label="Judul"
            variant="outlined"
            fullWidth />
        <div className='mt-3' />
        <ReactRTE initialValue={_content} parentCallback={handleCallback} />
        <div className='row mt-3'>
            <Button onClick={update} className='mr-3' variant="contained">Simpan</Button>
            <Button variant="outlined">Preview</Button>
        </div>
        <br />
    </div>
}

async function updateData({ content, title, id }) {
    const url = encodeURI(title.replaceAll(' ', '-').toLowerCase())
    if (auth.currentUser == null) {
        alert('sesi anda habis, silakan login')
        const router = useRouter()
        router.push('/admin/login')
        return
    }

    var updatedAt = Timestamp.fromDate(new Date());
    let updatedBy = auth.currentUser.displayName;

    try {
        const docRef = await addDoc(collection(db, "article"), {
            title, url, updatedAt, updatedBy, content
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}