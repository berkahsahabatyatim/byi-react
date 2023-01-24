import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/service/firebase';

export default function ArticleListEditor() {
    const [li, setLi] = useState([]);

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

    const items = []
    for (let i = 0; i < li.length; i++) {
        items.push(<li key={i}><a onClick={woke} >{li[i].title}</a></li>)
    }

    return <div>
        <h2>Artikel Editor</h2>
        <br />
        <ul>
            {items}
        </ul>
    </div>
}

async function woke() {

}