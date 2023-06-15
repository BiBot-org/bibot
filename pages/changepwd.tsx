import React from 'react'
import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import ChangePwdInput from '@/components/pages/changepwd/ChangePwdInput'

export default function Changepwd() {
    return (
        <>
            <main>
                <ChangePwdInput />
            </main>
        </>
    )
}

Changepwd.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <LoginUrlSetLayout title='비밀번호 변경'>
            {page}
        </LoginUrlSetLayout>
    )
}

Changepwd.auth = true