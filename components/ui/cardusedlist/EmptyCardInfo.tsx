import React from 'react'
import Image from 'next/image'

export default function EmptyCardInfo() {
    return (
        <div style={{
            textAlign: 'center',
            color: '#828282',
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Image
                aria-label='bibot'
                src='/assets/images/bibot-pic/bibot.svg'
                alt='bibot'
                width={25}
                height={25}
            />
            <div>카드를 등록해 주세요.</div>
        </div>
    )
}
