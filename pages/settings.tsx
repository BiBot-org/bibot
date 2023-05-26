import React from 'react'
import style from '@/styles/pages/settings.module.css'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import { Grid, Switch } from "@nextui-org/react"
import Image from 'next/image';

export default function Settings() {

    return (
        <>
            <div className={style.settingsWrap}>
                <h3>설정</h3>
                <div className={style.settingsItem}>
                    <div className={style.settingsItemTitle}>
                        <span>알림설정</span>
                    </div>
                    <Grid>
                        <Switch shadow color="success" checked={true} />
                    </Grid>
                </div>
                <div className={style.settingsItem}>
                    <div className={style.settingsItemTitle}>
                        <span>다크모드</span>
                    </div>
                    <Grid>
                        <Switch shadow color="success" checked={true} />
                    </Grid>
                </div>
                <h3>변경</h3>
                <div className={style.settingsItem}>
                    <div className={style.settingsItemTitle}>
                        <span>비밀번호 변경</span>
                    </div>
                    <Image src={'/assets/images/icons/rightarrowicon.svg'} alt='back' width={20} height={20} />
                </div>
            </div>
        </>
    )
}

Settings.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <BackTitleLayout title='환경설정'>
            {page}
        </BackTitleLayout>
    )
}
