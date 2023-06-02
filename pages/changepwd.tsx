import React from 'react'
import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import { Button, Container, Input, Row, Spacer } from '@nextui-org/react'

export default function Changepwd() {
    return (
        <>
            <Spacer y={3} />
            <main>
                <article>
                    <Container style={{ padding: 0 }}>
                        <Row>
                            <Input.Password
                                bordered
                                labelPlaceholder="Input your password"
                                type='password'
                                width='100%'
                            />
                        </Row>
                        <Spacer y={1.5} />
                        <Row>
                            <Input.Password
                                bordered
                                labelPlaceholder="Input your password"
                                type='password'
                                width='100%'
                            />
                        </Row>
                        <Spacer y={1.5} />
                        <Row>
                            <Input.Password
                                bordered
                                labelPlaceholder="Input your password"
                                type='password'
                                width='100%'
                            />
                        </Row>
                        <Spacer y={3} />
                        <Row>
                            <Button style={{ width: '100%' }}>임시 비밀번호 발급</Button>
                        </Row>
                    </Container>
                </article>
            </main>
        </>
    )
}

Changepwd.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <LoginUrlSetLayout title='비밀번호 변경'>
            {page}
        </LoginUrlSetLayout>
    )
}