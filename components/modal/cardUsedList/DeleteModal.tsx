import React from 'react'
import { Button, Spacer } from '@nextui-org/react'
import Image from 'next/image'
import style from './DeleteModal.module.css'
import { useRouter } from 'next/router'
import { DeleteCard } from '@/service/card/CardService'

export default function DeleteModal(props: { ismodalopen: boolean, handlemodal: React.Dispatch<React.SetStateAction<boolean>>, cardId: number }) {
    const router = useRouter()
    if (!props.ismodalopen) return null
    console.log('123', props.cardId);

    const handleDeleteCard = () => {
        DeleteCard(props.cardId).then((res) => {
            console.log(res);
            props.handlemodal(!props.ismodalopen);
            router.push('/cardusedlist');
        }).catch((err) => {
            console.log(err);
        })
    };

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
                            <Button auto className={style.checkBtn} onPress={handleDeleteCard} >
                                늬예 늬예
                            </Button>
                            <Button auto className={style.cancelBtn} onPress={() => props.handlemodal(!props.ismodalopen)}>
                                응 아니야
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
