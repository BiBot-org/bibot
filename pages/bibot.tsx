import Layout from "@/components/layouts/layout";
import { NextPageWithLayout } from "./_app";

const Bibot: NextPageWithLayout = () => {
  return (
    <main>
      {/* <h1>Home</h1> */}
    </main>
  )
}

Bibot.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
    <Layout>
        {page}
    </Layout>
    </>
  )
}

export default Bibot