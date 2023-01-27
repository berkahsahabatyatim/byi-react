import React from 'react'

export default function AdminSeparator() {
    const brs = [];

    for (let i = 0; i < 5; i++) {
        brs.push(<br key={i} />)
    }
    return <div>{brs}</div>
}