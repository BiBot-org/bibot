import React, { useState } from 'react'
import { Text } from '@nextui-org/react';
import SettingItems from '@/components/ui/mypage/SettingItems';
import Terms from '@/components/modal/mypage/Terms';
import Version from '@/components/modal/mypage/Version';
import Question from '@/components/modal/mypage/Question';

export default function Service() {
    const [istermmodalopen, setistermmodalopen] = useState<boolean>(false)
    const [isversionmodalopen, setisversionmodalopen] = useState<boolean>(false)
    const [ishelpmodalopen, setishelpmodalopen] = useState<boolean>(false)

    return (
        <div>
            <Terms ismodalopen={istermmodalopen} modal={setistermmodalopen} />
            <Version ismodalopen={isversionmodalopen} modal={setisversionmodalopen} />
            <Question ismodalopen={ishelpmodalopen} modal={setishelpmodalopen} />
            <Text size="$xl" css={{ color: "#40CCC3" }} weight={"bold"}>
                Service
            </Text>
            <SettingItems
                title="이용약관"
                iconUrl="/assets/images/icons/term.svg"
                iconAlt="won"
                ismodalopen={istermmodalopen}
                modal={setistermmodalopen}
            />
            <SettingItems
                title="버전정보"
                iconUrl="/assets/images/bibot-pic/bibot.svg"
                iconAlt="businesstrip"
                ismodalopen={isversionmodalopen}
                modal={setisversionmodalopen}
            />
            <SettingItems
                title="도움말"
                iconUrl="/assets/images/icons/question.svg"
                iconAlt="question"
                ismodalopen={ishelpmodalopen}
                modal={setishelpmodalopen}
            />
        </div>
    )
}
