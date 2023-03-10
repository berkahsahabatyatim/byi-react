import React from 'react'

export default function AdminSeparator({len}) {
    const n = len ?? 5;
    const brs = [];

    for (let i = 0; i < n; i++) {
        brs.push(<br key={i} />)
    }
    return <div>{brs}</div>
}