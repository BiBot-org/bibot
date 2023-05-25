import React, { ReactNode } from 'react'
import Image from 'next/image';
import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout';
import style from '@/styles/pages/login.module.css'
import { Button, Container, Input, Link, Row, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  return (
    <main className={style.mainContainer}>
      <article>
        <Image src="assets/images/bibot-pic/logoText.svg" alt="logo" width={135} height={46} priority />
        <Spacer y={3} />
        <Container style={{ padding: 0 }}>
          <Input
            aria-label='email'
            width='100%'
            bordered
            size='lg'
            placeholder="Input your Email"
            color='primary'
            style={{ fontSize: '0.8rem', fontWeight: 'bold' }}
          />
          <Spacer y={1} />
          <Input.Password
            aria-label='password'
            width='100%'
            bordered
            size='lg'
            placeholder="Input your password"
            color='primary'
            type='password'
            style={{ fontSize: '0.8rem', fontWeight: 'bold' }}
          />
          <Spacer y={1} />
          <Button
            aria-label='login'
            size='lg'
            onPress={() => router.push('/main')}
            style={{ width: '100%', backgroundColor: '#40CCC3' }}
          >
            로그인
          </Button>
          <Spacer y={1} />
          <Row justify='center'>
            <Link href='/findpassword'>비밀번호 찾기</Link>
          </Row>
        </Container>
      </article>
    </main>
  )
}

Login.getLayout = function getLayout(page: ReactNode) {
  return (
    <LoginUrlSetLayout title='LOGIN'>
      {page}
    </LoginUrlSetLayout>
  )
}