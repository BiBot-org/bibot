import React, { useState } from 'react'
import style from '@/components/widgets/Approval.module.css'
import Image from 'next/image'
import { ApprovalDTO } from '@/types/expense/types'
import { Collapse, Grid } from "@nextui-org/react";

export default function ApprovalDetail(props: { storeName: string, reason: string, manager: string }) {
    // const [info, setInfo] = useState<ApprovalDTO>()
    return (
        <div className={style.modalContent}>
            <div className={style.ContentImage}>
                <Image src={'/assets/images/icons/Food.svg'} alt={'Food'} width={25} height={25} />
            </div>

            <div className={style.ContentInfo}>
                <div className={style.Contentitle}>
                    <div className={style.contentmenu}>
                        <p>{props.storeName}</p>
                    </div>
                    <Grid.Container gap={1}>
                        <Grid>
                            <Collapse.Group>
                                <Collapse title="상세정보 확인">
                                    <p>사유 : 영수증 번호 불일치</p>
                                    <p>담당자 : 박노명</p>
                                </Collapse>
                            </Collapse.Group>
                        </Grid>
                    </Grid.Container>
                </div>
            </div>
            <div className={style.ContentPrice}>
                <p>반려</p>
            </div>

        </div>
    )
}
