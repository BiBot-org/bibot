import React from 'react'
import style from './Usedlist.module.css'
import { cardUsedData } from '@/datas/dummy/cardUsedData'
import CardUsedItem from '@/components/ui/cardusedlist/CardUsedItem'

export default function Usedlist() {
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
            <CardUsedItem key={index} category={data.category} title={data.title} price={data.price} date={data.date} />
          )
        })
      }
      
    </>
  )
}
