import React from 'react'
import style from '@/components/modal/TwoBtnModal.module.css'
import Image from 'next/image'
import Separator from '../ui/Separator'
import { useRouter } from 'next/router'

export default function TwoBtnModal(props: { text: string, isModal: boolean, modal: React.Dispatch<React.SetStateAction<boolean>>, link: string }) {
    const router = useRouter()
    return (
        <div className={style.modalBackground}>
            <div className={style.modalWrap}>
                <div className={style.modalHeader}>
                    <Image src='/assets/images/icons/positivelogo.svg' alt='positivelogo' width={40} height={40} />
                </div>
                <Separator gutter={0.5} />
                <div className={style.modalContents}>
                    <div className={style.modalText}>
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className={style.contentsBtn}>
                    <button className={style.checkBtn} onClick={() => router.push(props.link)}>
                        <Image src='/assets/images/icons/checkicon.svg' alt='checkicon' width={20} height={20} />
                    </button>
                    <button className={style.cancelBtn} onClick={() => props.modal(!props.isModal)}>
                        <Image src='/assets/images/icons/cancelicon.svg' alt='cancelicon' width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
