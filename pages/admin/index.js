import React from 'react';
import AdminSeparator from '../../src/component/AdminSeparator';
import ArticleListEditor from './article';

export default function AdminPage() {

    return <div>
        <AdminSeparator/>
        <div className='row'>
            <div className='col-2'>
                <a onClick={woke}>Artikel </a>
            </div>
            <div className='col-10'>
                <ArticleListEditor/>
            </div>
        </div>
    </div>
}

function woke() {
    console.log('sipo')
}