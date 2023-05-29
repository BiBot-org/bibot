import React, { useState } from 'react'
import SettingItems from '@/components/ui/mypage/SettingItems'
import AccountProfile from '@/components/ui/mypage/AccountProfile'
import TwoBtnModal from '@/components/modal/TwoBtnModal'
import { Spacer, Text } from '@nextui-org/react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'

export default function Mypage() {
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            <main>
                {isModal &&
                    <TwoBtnModal
                        isModal={isModal}
                        modal={setIsModal}
                        text='로그아웃 하시겠습니까?'
                        link='/'
                    />}
                <div>
                    <Text size="$xl" css={{ color: '#40CCC3' }} weight={'bold'}>Account</Text>
                    <AccountProfile imageUrl='/assets/images/dummy/user01.png' name='김땡땡' company='스파로스' email='spharos@newworld.com' />
                </div>
                <Spacer y={1} />
                <div>
                    <Text size="$xl" css={{ color: '#40CCC3' }} weight={'bold'}>Service</Text>

                    <SettingItems title='이용약관' iconUrl='/assets/images/icons/term.svg' iconAlt='won' link='/approvalhistory' />
                    <SettingItems title='버전정보' iconUrl='/assets/images/bibot-pic/bibot.svg' iconAlt='businesstrip' link='/mypage' />
                    <SettingItems title='도움말' iconUrl='/assets/images/icons/question.svg' iconAlt='question' link='/mypage' />
                </div>
                <Spacer y={2} />
                <div>
                    <Text size="$xl" css={{ color: '#40CCC3' }} weight={'bold'}>Setting</Text>
                    <SettingItems title='환경설정' iconUrl='/assets/images/icons/setting.svg' iconAlt='setting' link='/bibot' />
                    <div onClick={() => setIsModal(!isModal)}>
                        <SettingItems title='로그아웃' iconUrl='/assets/images/icons/logout.svg' iconAlt='logout' />
                    </div>
                </div>
            </main>
        </>
    )
}

Mypage.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <BackTitleLayout title='MyPage'>
            {page}
        </BackTitleLayout>
    )
}

