import React from 'react'
import style from '@/styles/pages/main/Home.module.css'
import CategoryNav from '@/components/widgets/main/CategoryNav'
import Layout from '@/components/layouts/layout'
import ApprovalHistoryModal from '@/components/modal/main/ApprovalHistoryModal'
import AnnounceMent from '@/components/widgets/main/AnnounceMent'

export default function main() {
    return (
        <main className={style.mainContainer}>
            <CategoryNav />
            <AnnounceMent />
            <ApprovalHistoryModal />
        </main>
    )
}

main.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}