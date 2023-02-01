import React, { useState } from 'react';
import AdminSeparator from '../../src/component/AdminSeparator';
import { articleDb, kajianDB } from '../../src/service/firebase';
import ArticleListEditor from './article';
import KajianListEditor from './kajian';

export default function AdminPage() {
    const [section, setSection] = useState(articleDb)

    function onSideClick(sect) {
        setSection(sect)
    }

    const items = []
    const menu = [
        { key: articleDb, label: 'Artikel' },
        { key: kajianDB, label: 'Kajian' }
    ]
    for (let i = 0; i < menu.length; i++) {
        items.push(
            <a key={i}
                style={{ "cursor": "pointer" }}
                onClick={() => onSideClick(menu[i].key)}>
                {menu[i].label}
            </a>
        )
        items.push(<br key={'b'+i}/>)
    }

    function Body() {
        switch (section) {
            case kajianDB:
                return <KajianListEditor/>
            case articleDb:
                return <ArticleListEditor/>
        }
    }

    return <div>
        <AdminSeparator />
        <div className='row'>
            <div className='col-2'>
                {items}
            </div>
            <div className='col-10'>
                <Body/>
            </div>
        </div>
    </div>
}