import React from 'react'
import style from './Usedlist.module.css'
import { cardUsedData } from '@/datas/dummy/cardUsedData'
import CardUsedItem from '@/components/ui/cardusedlist/CardUsedItem'
import { Input, Spacer } from '@nextui-org/react'

export default function UsedList() {
  const sum = cardUsedData.reduce((acc, cur) => {
    return acc + cur.price
  }, 0)
  
  return (
    <>
      <div className={style.card_used_sum}>
        <p>사용내역 합</p>
        <p>{sum.toLocaleString()}원</p>
      </div>
      <div className={style.dateWrap}>
        <Input type='date'/>
        <span>-</span>
        <Input type='date'/>
      </div>
      <Spacer y={1} />
      {
        cardUsedData.map((data, index) => {
          return (
            <CardUsedItem key={index} category={data.category} title={data.title} price={data.price} date={data.date} />
          )
        })
      }
      
    </>
  )
}
