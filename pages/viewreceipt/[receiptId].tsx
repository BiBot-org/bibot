import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import ViewInfoDetail from '@/components/pages/viewreceipt/ViewInfoDetail'
import React from 'react'

export default function Viewreceipt() {

  return (
    <>
      <ViewInfoDetail />
    </>
  )
}

Viewreceipt.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='사용내역'>
      {page}
    </BackTitleLayout>
  )
}