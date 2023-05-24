import BackNotiLayout from '@/components/layouts/BackNotiLayout'
import React from 'react'
import style from '@/styles/pages/settings.module.css'
import Separator from '@/components/ui/Separator'
import Title from '@/components/ui/Title'

export default function Settings() {

    return (
        <>
            <Separator gutter={7} />
            <Title title="Settings" size={20} />
            <div className={style.settingsWrap}>
                <div className={style.settingsItem}>
                    <div className={style.settingsItemTitle}>
                        <span>다크모드</span>
                    </div>
                    <div className={style.switchWrap}>
                        <input type="checkbox" id="toggle" hidden />
                        <label htmlFor="toggle" className={style.toggleSwitch}>
                            <span className={style.toggleButton}></span>
                        </label>
                    </div>
                </div>
                <div className={style.settingsItem}>
                    <div className={style.settingsItemTitle}>
                        <span>다크모드</span>
                    </div>
                    <div className={style.switchWrap}>
                        <input type="checkbox" id="toggle" hidden />
                        <label htmlFor="toggle" className={style.toggleSwitch}>
                            <span className={style.toggleButton}></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

Settings.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <BackNotiLayout>
            {page}
        </BackNotiLayout>
    )
}