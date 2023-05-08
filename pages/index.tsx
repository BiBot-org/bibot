import Layout from "@/components/layouts/layout";
import { NextPageWithLayout } from "./_app";
import AnnounceMent from "@/components/widgets/main/AnnounceMent";
import CategoryNav from "@/components/widgets/main/CategoryNav";
import ApprovalHistoryModal from "@/components/modal/main/ApprovalHistoryModal";

import style from '@/styles/pages/main/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <main className={style.mainContainer}>
      <CategoryNav/>
      <AnnounceMent />
      <ApprovalHistoryModal />
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