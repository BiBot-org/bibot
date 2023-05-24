import React from 'react'
import style from './Used_list.module.css'
import Card_used_item from '@/components/ui/card_used_list/card_used_item'
import { cardUsedData } from '@/datas/dummy/cardUsedData'

export default function Used_list() {
  const sum = cardUsedData.reduce((acc, cur) => {
    return acc + cur.price
  }, 0)
  
  return (
    <>
      <div className={style.card_used_sum}>
        <p>사용내역 합</p>
        <p>{sum.toLocaleString()}원</p>
      </div>
      {
        cardUsedData.map((data, index) => {
          return (
            <Card_used_item key={index} category={data.category} title={data.title} price={data.price} date={data.date} />
          )
        })
      }
      
    </>
  )
}
