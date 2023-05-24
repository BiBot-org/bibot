import React from 'react'
import style from '@/components/modal/CommonModal.module.css'
import Image from 'next/image'
import { Button, Spacer } from '@nextui-org/react'
import { useRouter } from 'next/router';

export default function CommonModal(props: { isModal: boolean, modal: React.Dispatch<React.SetStateAction<boolean>>, text: string, positive: boolean }) {
    const router = useRouter();
    
    if (!props.isModal) return null;

    return (
        <div className={style.modalBackground}>
            <div className={style.modalWrap}>
                <div className={style.modalHeader}>
                    {props.positive ?
                        <Image src='/assets/images/icons/positivelogo.svg' alt='positivelogo' width={40} height={40} />
                        : <Image src='/assets/images/icons/negativelogo.svg' alt='negativelogoIcon' width={40} height={40} />
                    }
                </div>
                <Spacer y={0.5} />
                <div className={style.modalContents}>
                    <div className={style.modalText}>
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className={style.contentsBtn}>
                    <Button
                        className={style.confirmBtn}
                        style={props.positive ? { backgroundColor: '#40CCC3' } : { backgroundColor: '#C95DEF' }}
                        onClick={() => router.push('/login')}
                        auto
                        icon={props.positive ?
                            <Image src='/assets/images/icons/checkicon.svg' alt='checkicon' width={20} height={20} />
                            : <Image src='/assets/images/icons/cancelicon.svg' alt='cancelicon' width={20} height={20} />}
                    >
                    </Button>
                </div>
            </div>
        </div>
    )
}
