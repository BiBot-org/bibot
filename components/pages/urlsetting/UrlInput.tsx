import React, { useState } from 'react'
import { Button, Container, Input, Spacer } from '@nextui-org/react'
import Image from 'next/image'
import TwoBtnModal from '@/components/modal/TwoBtnModal'

export default function UrlInput() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <TwoBtnModal isModal={isModalOpen} modal={setIsModalOpen} company={'Spharos'} text={'회사 이름이 맞습니까?'} link={'/login'} />
      <article>
        <Image src="/assets/images/bibot-pic/logoText.svg" alt="logo" width={135} height={46} priority />
        <Spacer y={3} />
        <Container style={{ padding: 0 }}>
          <Input
            aria-label="url"
            bordered
            width="100%"
            size='lg'
            placeholder="bibot.com/spharos/tech"
            color="primary"
            style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}
          />
          <Spacer y={1} />
          <Button
            auto
            aria-label="urlConfirm"
            color="primary"
            size='lg'
            onPress={() => setIsModalOpen(!isModalOpen)}
            style={{ width: '100%', backgroundColor: '#40CCC3', color: '#fff', textAlign: 'center' }}
          >
            확인
          </Button>
        </Container>
      </article>
    </>
  )
}
