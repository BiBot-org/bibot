import React from 'react'
import style from '@/styles/pages/Home.module.css'
import CategoryNav from '@/components/widgets/main/CategoryNav'
import Layout from '@/components/layouts/layout'
import ApprovalHistoryModal from '@/components/modal/main/ApprovalHistoryModal'
import AnnounceMent from '@/components/widgets/main/AnnounceMent'
import { mainCategoryData } from '@/datas/mainCategoryData'
import { mainCategoryType } from '@/types/main/mainTypes'
import { userData } from '@/datas/dummy/userData'
import { HeaderUserType } from '@/types/header/headerTypes'
import { GetStaticProps } from 'next'

export default function Main(props: { categoryData: mainCategoryType[], user: HeaderUserType }) {

    if (typeof window !== 'undefined' && props.user) {
        localStorage.setItem('user', JSON.stringify(props.user))
    }

    return (
        <main className={style.mainContainer}>
            <CategoryNav
                categoryData={props.categoryData}
            />
            <AnnounceMent />
            {/* <ApprovalHistoryModal /> */}
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

export const getStaticProps: GetStaticProps = async () => {

    // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/expense/category`)
    // const categoryData = await res.json()
    const categoryData = mainCategoryData
    const user = userData
    console.log(categoryData)
    console.log(user)

    return {
        props: {
            categoryData: categoryData,
            user: user
        }
    }
}

Main.auth = true