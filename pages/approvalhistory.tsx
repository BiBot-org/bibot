import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import TotalExpense from '@/components/pages/approvalhistory/TotalExpense'
import ApprovalList from '@/components/pages/approvalhistory/ApprovalList'

export default function Approvalhistory() {
  return (
    <main>
      <TotalExpense />
      <ApprovalList />
    </main>
  )
}

Approvalhistory.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='결재내역 조회'>
      {page}
    </BackTitleLayout>
  )
}
