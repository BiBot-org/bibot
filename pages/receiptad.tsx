import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import ViewStatusDetail from '@/components/pages/viewreceiptsecond/ViewStatusDetail'
import React from 'react'

export default function Viewreceipt() {

  return (
    <>
      <ViewStatusDetail />
    </>
  )
}

Viewreceipt.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='승인내역'>
      {page}
    </BackTitleLayout>
  )
}