import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import AdminSeparator from '../../../../src/component/AdminSeparator';
import AddImgDialog from '../../../../src/dialog/AddImgDialog';
import { Button, Dialog, TextField } from '@mui/material';
import { AddAPhotoRounded } from '@mui/icons-material';
import { app, auth, db, kajianDB } from '../../../../src/service/firebase';
import { addDoc, collection, doc, getDocs, getFirestore, query, Timestamp, updateDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';

export const editKajian = (path) => {
    return '/admin/kajian/edit/' + path;
}

const ReactRTE = dynamic(() => import("../../../../src/component/RichTextEditor.tsx"), {
    ssr: false,
});

export async function getStaticPaths() {
    const querySnapshot = await getDocs(collection(getFirestore(app), kajianDB))
    const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
    const urls = data.map((e) => ({ url: e.url }))
    urls.push({ url: 'new' })
    const paths = urls.map((post) => ({
        params: { id: post.url },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let output = ''
    const q = query(collection(getFirestore(app), kajianDB), where("url", "==", params.id));
    const list = await getDocs(q)
    const data = list.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    if (data.length > 0) {
        const { title, content, id } = data[0]
        output = { title, content, id }
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

export default function KajianEditor({ data }) {
    const { content, title, id } = data
    const [_title, setValue] = useState('')
    const [_content, setContent] = useState('')
    const [diOpen, setDiOpen] = useState(false);
    const [soha, setSoha] = useState(true)

    const handleCallback = (childData) => {
        setContent(childData)
        console.log(childData)
    }

    useEffect(() => {
        setValue(title)
        setContent(content)
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value)
    };


    const isUpdate = id !== undefined

    const update = () => {
        const obj = {
            id,
            isUpdate,
            content: _content,
            title: _title,
        }
        console.log('ini cuy', _content)
        updateData(obj)
    }

    const addPhoto = () => {
        setDiOpen(true)
    }

    const onImgSelected = (img) => {
        console.log('ini img', img)
        setDiOpen(false)
        setContent(`${_content}<p><img src="${img}" width="100" height="100"/></p>`)
        setSoha(false)
        setTimeout(() => {
            setSoha(true)
        }, 50)
    }//npx react-codemod rename-unsafe-lifecycles

    return <div className='mx-5'>
        <AdminSeparator />
        <div className='d-flex justify-content-between'>
            <h3>Kajian Editor</h3>
            <div width={50} />
            <div
                className="elPointer"
                onClick={addPhoto}>
                <AddAPhotoRounded
                    color="primary">
                    add_circle
                </AddAPhotoRounded>
            </div>
            <div width={50} />
        </div>
        <br />
        {diOpen ? <Dialog
            open={diOpen}>
            <AddImgDialog
                onClose={() => setDiOpen(false)}
                onImgSelected={onImgSelected}
            />
        </Dialog> : <div />}
        <TextField
            value={_title}
            onChange={handleChange}
            label="Judul"
            variant="outlined"
            fullWidth />
        <div className='mt-3' />
        {soha ? <ReactRTE
            initialValue={_content}
            parentCallback={handleCallback}
        /> : <p></p>}
        <div className='row mt-3'>
            <Button onClick={update} className='mr-3' variant="contained">Simpan</Button>
            <Button variant="outlined">Preview</Button>
        </div>
        <br />
    </div>
}

async function updateData({ content, title, id, isUpdate }) {
    const url = encodeURI(title.replaceAll(' ', '-').toLowerCase())
    if (auth.currentUser == null) {
        alert('sesi anda habis, silakan login')
        const router = useRouter()
        router.push('/admin/login')
        return
    }

    var updatedAt = Timestamp.fromDate(new Date());
    let updatedBy = auth.currentUser.displayName;
    let docRef;
    try {
        const body = {
            title, url, updatedAt, updatedBy, content
        }
        if (isUpdate) {
            docRef = doc(db, kajianDB, id)
            await updateDoc(docRef, body)
        } else {
            docRef = await addDoc(collection(db, kajianDB), body);
        }
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}