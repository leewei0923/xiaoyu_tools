import { NextPage } from "next"
import Head from "next/head";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import styles from "../styles/componentDemos.module.scss";
import Milestones from "../src/components/ComponentDemos/Bytedance_milestones/Milestones";


const ComponentDemos: NextPage = () => {

  return (
    <>
      <Head>
        <title>Component demos</title>
        <meta name="description" content="Component demos" />
        <link rel="icon" href="/xiaoyu_tools/logo.png" />
      </Head>

      <Header siteName="COMPONENT DEMOS" />

      <main className={styles.container}>
        <Milestones />
      </main>
      
      <Footer />
    </>
  );
}

export default ComponentDemos;