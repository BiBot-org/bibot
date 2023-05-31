import React from 'react'
import NoticeNav from '@/components/ui/notice/NoticeNav'
import SearchInput from '@/components/ui/notice/SearchInput'
import { Button, Spacer } from '@nextui-org/react'
import NoticeItemList from '@/components/widgets/notice/NoticeItemList'

export default function NoticeList() {
    return (
        <>
            <NoticeNav />
            <Spacer y={1} />
            <SearchInput />
            <Spacer y={1} />
            <NoticeItemList />
            <Spacer y={1} />
            <div>
                <Button
                    aria-label='more'
                    style={{
                        margin: '0 auto',
                        backgroundColor: 'var(--bibot-primary)'
                    }}
                >
                    더보기
                </Button>
            </div>
        </>
    )
}
