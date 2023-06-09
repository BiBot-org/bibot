import CardUsedItem from '@/components/ui/cardusedlist/CardUsedItem'
import React from 'react'
import Image from 'next/image'
import { Spacer, Table } from '@nextui-org/react'
import { ReceiptType } from '@/types/receipt/receiptType'
import style from '@/components/pages/viewreceiptsecond/ViewStatusDetail';
import ApprovalDetail from '@/components/widgets/AprrovalDetail';

export default function ViewInfoDetail() {
    const columns = [
        { key: "item", label: "항목" },
        { key: "price", label: "가격" },
    ]

    const rows: ReceiptType[] = [
        { key: "1", item: "새우깡", price: 1000 },
        // { key: "2", item: "쇠고기해장국", price: 8000 },
        // { key: "3", item: "만두국", price: 8000},
        // { key: "3", item: "간장불뚝", price: 8000},
        // { key: "3", item: "매운불뚝", price: 8000},
        // { key: "3", item: "순두부찌개", price: 8000},
        // { key: "3", item: "김치찌개", price: 8000},
        // { key: "3", item: "우거지갈비탕", price: 11000},
        // { key: "3", item: "갈비탕", price: 13000},
        // { key: "10", item: "갈비찜", price: 50000 },

        
    ]

    return (
        <article>
            <div style={{padding: '1rem 1rem'}}>
                <ApprovalDetail storeName='마트' manager='박노명' reason='몰라'/>

                {/* <div>상태 : 반려</div>
                <div>사유 : 영수증 일련번호 불일치</div>
                <div>담당자 : 박노명</div> */}
                {/* <CardUsedItem
              isRequested={false} /> */}
            </div>
            <div style={{ display: 'flex' }}>
                <Image
                    aria-label='영수증'
                    src='/assets/images/dummy/bibotcard.png'
                    width={319}
                    height={319}
                    alt='영수증'
                    style={{ width: '100%', height: 'auto' }}
                    priority
                />
            </div>
            <Spacer y={-4} />
            <div>
                <Table
                    aria-label='영수증 정보'
                    style={{ padding: '0 2rem' }}
                >
                    <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Column align='center' key={column.key}>{column.label}</Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body items={rows}>
                        {(item) => (
                            <Table.Row key={item.key}>
                                {(columnKey) => <Table.Cell css={{ textAlign: 'center' }}>{item[columnKey as keyof ReceiptType]}</Table.Cell>}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        </article>
    )
}
