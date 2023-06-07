import { Button, Spacer } from '@nextui-org/react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ProfileInfo from '@/components/ui/profile/ProfileInfo'
import style from './ProfileInfoList.module.css'
import { useRecoilState } from 'recoil'
import { BibotUserInfo } from '@/types/user/types'
import { userInfoState } from '@/state/userInfo/UserInfoState'
import { useSession } from 'next-auth/react'
import { GetUserInfo } from '@/service/user/UserService'

export default function ProfileInfoList() {
    const [userInfo, setUserInfo] = useRecoilState<BibotUserInfo>(userInfoState);
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            GetUserInfo(session.tokenInfo.id).then((res) => setUserInfo(res.data));
        }
    }, [session, setUserInfo]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (image) {
            console.log(image.name);
        }
    }

    return (
        <div className={style.profileWrap}>
            <Spacer y={2} />
            <div className={style.profileImage}>
                <Image
                    id='profileImage'
                    src={userInfo.bibotUser.profileUrl || '/assets/images/icons/emptyprofile.svg'}
                    width={150}
                    height={150}
                    alt="profile"
                    priority
                />
            </div>
            <Spacer y={1} />
            <div className={style.ImageBtnWrap}>
                <input type="file" id='imageInput' accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                <Button
                    size={'xs'}
                    onPress={() => document.getElementById('imageInput')?.click()}
                >
                    수정
                </Button>
            </div>
            <Spacer y={5} />
            <div className={style.profileInfoWrap}>
                <ProfileInfo title="이름" content={userInfo.bibotUser.lastName + userInfo.bibotUser.firstName} />
                <ProfileInfo title="이메일" content={userInfo.bibotUser.email} />
                <ProfileInfo title="부서" content={userInfo.department.name} />
                <ProfileInfo title="소속" content={userInfo.team.name} />
            </div>
        </div>
    )
}
