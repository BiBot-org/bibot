import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import Image from 'next/image'
import React, { useState } from 'react'
import style from '@/styles/pages/urlsetting.module.css'
import { Button, Container, Input, Row, Spacer } from '@nextui-org/react'
import TwoBtnModal from '@/components/modal/TwoBtnModal'

export default function Urlsetting() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
        <TwoBtnModal isModal={isModalOpen} modal={setIsModalOpen} text={'Spharos'} link={'/login'} />
        <main className={style.mainContainer}>
            <article>
                <Image src="/assets/images/bibot-pic/logoText.svg" alt="logo" width={135} height={46} priority />
                <Spacer y={5} />
                <Container style={{padding:0}}>
                    <Row justify='center'>
                        <Input width='100%' bordered labelPlaceholder="Input your URL" />
                    </Row>
                    <Spacer y={1} />
                    <Row justify='center' >
                        <Button onClick={() => setIsModalOpen(!isModalOpen)} style={{width:'100%'}}  shadow color={'primary'}>등록</Button>
                    </Row>
                </Container>
            </article>
        </main>
        </>
    )
}

Urlsetting.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <LoginUrlSetLayout title='SETTING'>
            {page}
        </LoginUrlSetLayout>
    )
}