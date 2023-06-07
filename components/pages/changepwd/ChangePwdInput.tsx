import { Input, Spacer, Button } from '@nextui-org/react'
import React from 'react'

export default function ChangePwdInput() {
    return (
        <article>
            <Spacer y={3} />
            <Input.Password
                bordered
                aria-label="nowpassword"
                placeholder="Input your password"
                type='password'
                width='100%'
                size='lg'
            />
            <Spacer y={1.5} />
            <Input.Password
                bordered
                aria-label="newpassword"
                placeholder="Input your password"
                type='password'
                width='100%'
                size='lg'
            />
            <Spacer y={1.5} />
            <Input.Password
                bordered
                aria-label="newpasswordcheck"
                placeholder="Input your password"
                type='password'
                width='100%'
                size='lg'
            />
            <Spacer y={3} />
            <Button
                size='lg'
                style={{ width: '100%', backgroundColor: 'var(--bibot-primary)' }}
            >
                비밀번호 변경
            </Button>
        </article>
    )
}
