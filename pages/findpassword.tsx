import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import React, { useState } from 'react'
import { Button, Container, Input, Spacer } from '@nextui-org/react'
import CommonModal from '@/components/modal/CommonModal'

export default function Findpassword() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <CommonModal isModal={isModalOpen} modal={setIsModalOpen} text='이메일로 임시비밀번호가 발급 되었습니다.' positive />
      <article style={{ padding: '0 3rem' }}>
        <div style={{ color: '#B6B7B9', height:'46px' }}>
          <p style={{ fontSize: '0.8rem' }}>가입한 이메일 주소로 임시 비밀번호를 알려드립니다.</p>
          <p style={{ fontSize: '0.8rem' }}>로그인 후 비밀번호를 꼭 변경해주세요.</p>
        </div>
        <Spacer y={3} />
        <Container style={{ padding: 0 }}>
          <Input
            aria-label="email"
            width='100%'
            bordered
            placeholder="Input your Email"
            size='lg'
            color='primary'
            style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}
          />
          <Spacer y={1} />
          <Button
            aria-label='issuepassword'
            auto
            color="primary"
            size='lg'
            style={{ width: '100%', backgroundColor: '#40CCC3' }}
            onPress={() => setIsModalOpen(!isModalOpen)}
          >
            임시 비밀번호 발급
          </Button>
        </Container>
      </article>
    </>
  )
}

Findpassword.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LoginUrlSetLayout title='비밀번호 찾기'>
      {page}
    </LoginUrlSetLayout>
  )
}