import React from 'react'
import style from '@/styles/pages/main/Home.module.css'
import CategoryNav from '@/components/widgets/main/CategoryNav'
import Layout from '@/components/layouts/layout'
import ApprovalHistoryModal from '@/components/modal/main/ApprovalHistoryModal'
import AnnounceMent from '@/components/widgets/main/AnnounceMent'
import { mainCategoryData } from '@/datas/mainCategoryData'
import { mainCategoryType } from '@/types/main/mainTypes'

export default function Main(props: {categoryData:mainCategoryType[] }) {
    return (
        <main className={style.mainContainer}>
            <CategoryNav 
                categoryData={props.categoryData}
            />
            <AnnounceMent />
            <ApprovalHistoryModal />
        </main>
    )
}

Main.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {

    // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/expense/category`)
    // const categoryData = await res.json()
    const categoryData = mainCategoryData
    console.log(categoryData)

    return {
        props: {
            categoryData: categoryData
        }
    }
}