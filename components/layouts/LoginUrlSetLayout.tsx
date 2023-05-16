import React from 'react'
import style from './LoginUrlSetLayout.module.css'
import Separator from '../ui/Separator';

export default function LoginUrlSetLayout(props: { children: React.ReactNode, title: string }) {
    return (
        <>
            <header className={style.mainContainer}>
                <Separator gutter={10} />
                <div className={style.logoText}>
                    <p>{props.title}</p>
                    <Separator gutter={1} />
                </div>
            </header>
            {props.children}
        </>
    )
}
