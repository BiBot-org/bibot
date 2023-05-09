import BackNotiLayout from '@/components/layouts/BackNotiLayout'
import React from 'react'
import style from '@/styles/pages/profile.module.css'
import Image from 'next/image'
import Separator from '@/components/ui/Separator'
import Title from '@/components/ui/Title'
import ProfileInfo from '@/components/ui/profile/ProfileInfo'
import { useRouter } from 'next/router'

export default function profile() {
    const router = useRouter()
    return (
        <div className={style.profileWrap}>
            <Separator gutter={7} />
            <Title title='계정 정보' size={20} />
            <div className={style.profileImage}>
                <Image src='/assets/images/dummy/user01.png' width={150} height={150} alt='profile' />
            </div>
            <Separator gutter={2} />
            <div className={style.profileInfoWrap}>
                <ProfileInfo title='이름' content='홍길동' />
                <ProfileInfo title='사번' content='S987654' />
                <ProfileInfo title='부서' content='Spharos' />
                <ProfileInfo title='소속' content='NewWorld' />
            </div>

            <div className={style.changePwdWrap} onClick={()=>router.push('/change_pwd')}>
                <div className={style.PwdTitle}>비밀번호 변경</div>
                <div className={style.PwdRightIcon}>
                    <Image src='/assets/images/icons/rightArrow.svg' width={23} height={15} alt='right' />
                </div>
            </div>
        </div>
    )
}

profile.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <BackNotiLayout>
            {page}
        </BackNotiLayout>
    )
}
