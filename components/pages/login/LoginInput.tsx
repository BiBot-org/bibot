import { Spacer, Container, Input, Button, Row } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image'

export default function LoginInput() {
    const router = useRouter();
    return (
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
                    onPress={() => router.push('/main?categoryId=1')}
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
    )
}
