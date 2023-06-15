import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>BIBOT | {props.title}</title>
      </Head>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
