import BackNotiLayout from '@/components/layouts/BackNotiLayout'
import React from 'react'
import style from '@/styles/pages/changepwd.module.css'
import Separator from '@/components/ui/Separator'
import Title from '@/components/ui/Title'

export default function changepwd() {
    return (
        <>
            <Separator gutter={7} />
            <Title title='비밀번호 변경' size={20} />
            <Separator gutter={7} />
            <div className={style.changePwdWrap}>
                <input type="password" placeholder="현재 비밀번호" maxLength={12}/>
                <input type="password" placeholder="새로운 비밀번호(8~12자)" maxLength={12}/>
                <input type="password" placeholder="새로운 비밀번호 확인" maxLength={12}/>
                <Separator gutter={7} />
                <button>비밀번호 변경</button>
            </div>
        </>
    )
}

changepwd.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <BackNotiLayout>
                {page}
            </BackNotiLayout>
        </>
    )
}