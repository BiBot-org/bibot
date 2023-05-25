import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import Termsitems from '@/components/ui/terms/TermsItems'
import style from '@/styles/module.css/terms.module.css'

export default function Terms() {
  return (
    <main className={style.terms_wrap}>
      <div><Termsitems /></div>
    </main>
  )
}

Terms.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='이용약관'>
      {page}
    </BackTitleLayout>
  )
}
