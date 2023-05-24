import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import React, { useState } from 'react'
import style from '@/styles/pages/findpassword.module.css'
import { Button, Container, Input, Row, Spacer } from '@nextui-org/react'
import CommonModal from '@/components/modal/CommonModal'

export default function Findpassword() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <CommonModal isModal={isModalOpen} modal={setIsModalOpen} text='이메일로 임시비밀번호가 발급 되었습니다.' positive/>
      <header className={style.headerWrap}>
        <p>가입한 이메일 주소로 임시 비밀번호를 알려드립니다.</p>
        <p>로그인 후 비밀번호를 꼭 변경해주세요.</p>
      </header>
      <main className={style.mainContainer}>
        <article className={style.articleWrap}>
          <Spacer y={5.5} />
          <Container style={{ padding: 0 }}>
            <Row>
              <Input width='100%' bordered labelPlaceholder="Input your Email" />
            </Row>
            <Spacer y={4.5} />
            <Row>
              <Button style={{ width: '100%' }} onClick={()=>setIsModalOpen(!isModalOpen)}>임시 비밀번호 발급</Button>
            </Row>
          </Container>
        </article>
      </main>
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