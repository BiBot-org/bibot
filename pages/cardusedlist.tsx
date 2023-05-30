import React, { ReactNode } from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import CardSlide from '@/components/pages/cardUsedList/CardSlide'

export default function CardUsedList() {

  return (
    <>
      <CardSlide />
    </>
  )
}

CardUsedList.getLayout = function getLayout(page: ReactNode) {
  return (
    <BackTitleLayout title='카드 사용 내역'>
      {page}
    </BackTitleLayout>
  )
}