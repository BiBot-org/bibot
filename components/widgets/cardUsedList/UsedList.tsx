import React, { ChangeEvent, useState } from 'react'
import style from './UsedList.module.css'
import { cardUsedData } from '@/datas/dummy/cardUsedData'
import CardUsedItem from '@/components/ui/cardusedlist/CardUsedItem'
import { FormElement, Input, Spacer } from '@nextui-org/react'

export default function UsedList() {

  const today = new Date().toISOString().slice(0, 10)
  const threeMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 3)).toISOString().slice(0, 10)
  const [leftDate, setLeftDate] = useState<string>(threeMonthAgo)
  const [rightDate, setRightDate] = useState<string>(today)

  const handleRightDateChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<FormElement>) => {
    const selectedDate = e.target.value;
    const currentDate = new Date();
    const selected = new Date(selectedDate);

    if (selected <= currentDate) {
      setRightDate(selectedDate);
      setLeftDate(calculateThreeMonthAgo(selectedDate));
    } else {
      setRightDate(today);
      setLeftDate(calculateThreeMonthAgo(today));
    }
  };

  const calculateThreeMonthAgo = (selectedDate: string) => {
    const currentDate = new Date(selectedDate);
    currentDate.setMonth(currentDate.getMonth() - 3);
    return currentDate.toISOString().slice(0, 10);
  };


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
        <Input
          aria-label='threeMonthAgo'
          type='date'
          value={leftDate}
          readOnly
        />
        <span>-</span>
        <Input
          aria-label='today'
          type='date'
          value={rightDate}
          onChange={handleRightDateChange}
          max={today}
        />
      </div>
      <Spacer y={1} />
      {
        cardUsedData.map((data, index) => {
          return (
            <CardUsedItem key={index} category={data.category} title={data.title} price={data.price} date={data.date} submit={data.submit} />
          )
        })
      }
    </>
  )
}
