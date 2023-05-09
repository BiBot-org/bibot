import React from 'react'
import BackNotiHeader from './BackNotiHeader'

export default function BackNotiLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <BackNotiHeader />
            {props.children}
        </>
    )
}
