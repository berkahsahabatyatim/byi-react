import { Button } from '@mui/material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/service/firebase';
import { editKajian } from './edit/[id]';

export default function KajianListEditor() {
    const [li, setLi] = useState([]);
    const router = useRouter()

    async function getData() {
        const querySnapshot = await getDocs(collection(db, "kajian"))
        const data = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
        setLi(data);
    }

    useEffect(() => {
        getData();
    }, [])

    const addArticle = () => {
        router.push(editKajian('new'))
    }

    const items = []
    for (let i = 0; i < li.length; i++) {
        items.push(<li key={i}><Link target="_blank" href={editKajian(li[i].url)}>{li[i].title}</Link></li>)
    }

    return <div>
        <div className='d-flex justify-content-between'>
            <h2>Kajian Editor</h2>
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