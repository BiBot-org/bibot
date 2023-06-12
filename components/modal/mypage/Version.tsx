import React from 'react'
import Image from 'next/image'
import { Spacer } from '@nextui-org/react'

export default function Version(props: { ismodalopen: boolean, modal: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (!props.ismodalopen) return null;
    return (
        <>
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                backgroundColor: 'white',
                zIndex: 101,
            }}
            >
                <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '70px' }}>
                    <div></div>
                    <h4 style={{ textAlign: 'center', color: 'var(--bibot-primary)', margin: '0' }}>버전정보</h4>
                    <Image
                        src="/assets/images/icons/cancelMint.svg"
                        alt="cancelIcon"
                        width={20}
                        height={20}
                        onClick={() => props.modal(!props.ismodalopen)}
                    />
                </header>
                <Spacer y={1} />
                <main>
                    <h5>Version : v1.0.0</h5>
                </main>
            </div>
        </>
    )
}
