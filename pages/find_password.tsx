import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import React from 'react'
import style from '@/styles/pages/find_password.module.css'
import { Button, Container, Input, Row, Spacer } from '@nextui-org/react'

export default function find_password() {
  return (
    <>
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
              <Button style={{ width: '100%' }}>임시 비밀번호 발급</Button>
            </Row>
          </Container>
        </article>
      </main>
    </>
  )
}

find_password.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LoginUrlSetLayout title='비밀번호 찾기'>
      {page}
    </LoginUrlSetLayout>
  )
}