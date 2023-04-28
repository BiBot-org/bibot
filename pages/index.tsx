import Layout from "@/components/layouts/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <main>
      {/* <h1>Home</h1> */}
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