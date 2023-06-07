import React from 'react'
import { Button, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import style from './LogoutModal.module.css';
import { endSession } from '@/service/auth/AuthService';
import { signOut } from 'next-auth/react';

export default function LogoutModal(props: {
    text: string;
    isModal: boolean;
    modal: React.Dispatch<React.SetStateAction<boolean>>;
}) {


    const handleSignOut = async () => {
        await endSession().then(
            async () =>
                await signOut()
                    .then(() => {
                        alert('로그아웃 되었습니다.');
                    })
        );
    };
    if (!props.isModal) {
        return null;
    }

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modalWrap}>
                    <div className={style.modalHeader}>
                        <Image
                            src="/assets/images/icons/positivelogo.svg"
                            alt="positivelogo"
                            width={40}
                            height={40}
                        />
                    </div>
                    <Spacer y={0.5} />
                    <div className={style.modalContents}>
                        <div className={style.modalText}>
                            <p>{props.text}</p>
                        </div>
                        <Spacer y={1} />
                        <div className={style.contentsBtn}>
                            <Button
                                auto
                                className={style.checkBtn}
                                onPress={() => {
                                    handleSignOut();
                                }}
                            >
                                YES
                            </Button>
                            <Button
                                auto
                                className={style.cancelBtn}
                                onPress={() => {
                                    props.modal(!props.isModal)
                                }}
                            >
                                NO
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
