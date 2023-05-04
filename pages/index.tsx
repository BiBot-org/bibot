import Layout from "@/components/layouts/layout";
import { NextPageWithLayout } from "./_app";
import AnnounceMent from "@/components/widgets/main/AnnounceMent";
import CategoryNav from "@/components/widgets/main/CategoryNav";
import ApprovalHistory from "@/components/modal/main/ApprovalHistory";

import style from '@/styles/main/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <main className={style.mainContainer}>
      <CategoryNav/>
      <AnnounceMent />
      <ApprovalHistory />
    </main>
  )
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
    <Layout>
        {page}
    </Layout>
    </>
  )
}

export default Home