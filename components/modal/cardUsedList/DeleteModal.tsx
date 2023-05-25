import React from 'react'
import { Button, Spacer } from '@nextui-org/react'
import Image from 'next/image'
import style from './DeleteModal.module.css'
import { useRouter } from 'next/router'

export default function DeleteModal(props: { ismodalopen: boolean, handlemodal: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (!props.ismodalopen) return null
    const router = useRouter()

    const handleClickYes = () => {
        props.handlemodal(!props.ismodalopen)
        router.replace('/cardusedlist')
    }

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modalWrap}>
                    <div className={style.modalHeader}>
                        <Image src='/assets/images/icons/positivelogo.svg' alt='positivelogo' width={40} height={40} />
                    </div>
                    <Spacer y={0.5} />
                    <div className={style.modalContents}>
                        <div className={style.modalText}>
                            <p>카드를 삭제 하시겠습니까?</p>
                        </div>
                        <Spacer y={1} />
                        <div className={style.contentsBtn}>
                            <Button auto className={style.checkBtn} onClick={handleClickYes} >
                                늬예 늬예
                            </Button>
                            <Button auto className={style.cancelBtn} onClick={() => props.handlemodal(!props.ismodalopen)}>
                                응 아니야
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
