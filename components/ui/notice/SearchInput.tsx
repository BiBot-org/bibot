import React from 'react'
import Image from 'next/image'
import { Input, Spacer } from '@nextui-org/react'

export default function SearchInput() {
    return (
        <div>
            <div style={{
                width: '100%',
            }}>
                <Input
                    aria-label='search'
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    bordered
                    size='lg'
                    width='100%'
                    color='primary'
                    contentRight={
                        <Image
                            aria-label="glasses"
                            src={"/assets/images/icons/glasses.svg"}
                            alt="glasses"
                            width={20}
                            height={20}
                            style={{width:'auto', height:'auto'}}
                        />
                    }
                />
            </div>
        </div>
    )
}
