import React from 'react'
import style from './LoginUrlSetLayout.module.css'
import HeaderBackBtn from './backbtnHeader/HeaderBackBtn';
import { Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function LoginUrlSetLayout(props: { children: React.ReactNode, title: string }) {
    const router = useRouter();

    return (
        <>
            <header className={style.mainContainer}>

                {
                    router.pathname === '/findpassword' || router.pathname === '/changepwd' ?
                        <>
                            <Spacer y={2} />
                            <HeaderBackBtn />
                            <Spacer y={7} />
                        </> : <Spacer y={10} />
                }
                <div className={style.logoText}>
                    <p>{props.title}</p>
                </div>
            </header>
            {props.children}
        </>
    )
}
