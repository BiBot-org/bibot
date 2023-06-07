import { Text } from '@nextui-org/react';
import React, { useState } from 'react'
import SettingItems from '@/components/ui/mypage/SettingItems';
import LogoutModal from '@/components/modal/mypage/LogoutModal';

export default function Setting() {
    const [isModal, setIsModal] = useState<boolean>(false);
    return (
        <div>
            <LogoutModal
                isModal={isModal}
                modal={setIsModal}
                text="로그아웃 하시겠습니까?"
            />
            <Text size="$xl" css={{ color: "#40CCC3" }} weight={"bold"}>
                Setting
            </Text>
            <SettingItems
                title="환경설정"
                iconUrl="/assets/images/icons/setting.svg"
                iconAlt="setting"
                link="/settings"
            />
            <div onClick={() => { setIsModal(!isModal) }}>
                <SettingItems
                    title="로그아웃"
                    iconUrl="/assets/images/icons/logout.svg"
                    iconAlt="logout"
                    ismodalopen={isModal}
                    modal={setIsModal}
                />
            </div>
        </div>
    )
}
