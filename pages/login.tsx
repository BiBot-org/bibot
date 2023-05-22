import React, { ReactNode } from 'react'
import Image from 'next/image';
import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout';
import style from '@/styles/pages/login.module.css'
import { Button, Container, Input, Link, Row, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();
  return (
    <main className={style.mainContainer}>
      <article>
        <Image src="assets/images/bibot-pic/logoText.svg" alt="logo" width={135} height={46} priority />
        <Spacer y={5} />
        <Container style={{ padding: 0 }}>
          <Row>
            <Input width='100%' bordered labelPlaceholder="Input your Email" />
          </Row>
          <Spacer y={1.5} />
          <Row>
            <Input.Password width='100%' bordered labelPlaceholder="Input your password" type='password' />
          </Row>
          <Spacer y={1} />
          <Row>
            <Button onClick={() => router.push('/main')} css={{width:'100%'}}>로그인</Button>
          </Row>
          <Spacer y={1} />
          <Row justify='center'>
            <Link href='/find_password'>비밀번호 찾기</Link>
          </Row>
        </Container>
      </article>
    </main>
  )
}

login.getLayout = function getLayout(page: ReactNode) {
  return (
    <LoginUrlSetLayout title='LOGIN'>
      {page}
    </LoginUrlSetLayout>
  )
}