import React from 'react'
import style from '@/components/modal/TwoBtnModal.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Spacer } from '@nextui-org/react'

export default function TwoBtnModal(props: { text: string, isModal: boolean, modal: React.Dispatch<React.SetStateAction<boolean>>, link: string, company?: string }) {
    
    const router = useRouter()

    if (!props.isModal) {
        return null;
    }
    
    return (
        <div className={style.modalBackground}>
            <div className={style.modalWrap}>
                <div className={style.modalHeader}>
                    <Image src='/assets/images/icons/positivelogo.svg' alt='positivelogo' width={40} height={40} />
                </div>
                <Spacer y={0.5} />
                <div className={style.modalContents}>
                    <div className={style.modalText}>
                        <p>{props.company}</p>
                        <p>{props.text}</p>
                    </div>
                    <Spacer y={1} />
                    <div className={style.contentsBtn}>
                        <Button auto className={style.checkBtn} onPress={() => router.push(props.link)}>
                            늬예 늬예
                        </Button>
                        <Button auto className={style.cancelBtn} onPress={() => props.modal(!props.isModal)}>
                            응 아니야
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
