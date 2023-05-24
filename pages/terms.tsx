import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import Terms_items from '@/components/ui/terms/terms_items'
import style from '@/styles/module.css/terms.module.css'

export default function terms() {
  return (
    <main className={style.terms_wrap}>
      <div><Terms_items /></div>
    </main>
  )
}

terms.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='이용약관'>
      {page}
    </BackTitleLayout>
  )
}
