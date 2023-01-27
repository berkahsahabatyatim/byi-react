import { Button } from '@mui/material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/service/firebase';
import { editArtikel } from './edit/[id]';

export default function ArticleListEditor() {
    const [li, setLi] = useState([]);
    const router = useRouter()

    async function getData() {
        const querySnapshot = await getDocs(collection(db, "article"))
        const data = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
        const urls = data.map((e) => ({ url: e.url }))

        const q = query(collection(db, "article"), where("url", "==", 'tips-memilih-hewan-qurban'));
        const list = await getDocs(q)
        const result = list.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setLi(data);
        console.log(urls, result);
    }

    useEffect(() => {
        getData();
    }, [])

    const addArticle = () => {
        router.push(editArtikel('new'))
    }

    async function woke(id) {
        console.log('apa ini' + id)
        router.push(editArtikel(id))
    }

    const items = []
    for (let i = 0; i < li.length; i++) {
        items.push(<li key={i}><Link target="_blank" rel="noopener noreferrer" href={editArtikel(li[i].url)}>{li[i].title}</Link></li>)
    }

    return <div>
        <div className='d-flex justify-content-between'>
            <h2>Artikel Editor</h2>
            <div width={50} />
            <Button onClick={addArticle}>Artikel Baru</Button>
            <div width={50} />
        </div>
        <br />
        <ul>
            {items}
        </ul>
    </div>
}