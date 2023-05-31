import React from 'react'

export default function NoticeNav() {
    return (
        <div>
            <ul style={{
                display: 'flex',
                justifyContent: 'space-between',
                listStyle: 'none'
            }}>
                <li>전체</li>
                <li>공지사항</li>
                <li>시스템점검</li>
            </ul>
        </div>
    )
}
