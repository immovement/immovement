// 'use client';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

import { FaInstagram } from 'react-icons/fa';
import { Header } from './components/Header';
import { ScrollSection } from './components/ScrollSection';
// import { Button } from '@/components/button'

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>im movement</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="transparent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.backgroundContainer}> */}
      <Header />
      <main className={styles.main}>
        {/* <ScrollSection /> */}
        <section className={styles.screen}>
          <h1 className={styles.heading}>IM Movement</h1>
          <Image
            className={styles.hero}
            src="/izzy.jpg"
            alt="Isabelle wearing all white standing under two chevron neon lights; one light is red and one is blue"
            width={1290}
            height={1609}
            // placeholder="blur"
            // blurDataURL="/izzy.jpg"
            priority
            layout="responsive"
            // height={37}
          />
          <h2 className={styles.subHeading}>coming soon...</h2>
          {/* <Button title="sign up" onClick={()=>alert('sign up')} /> */}
        </section>
        <section className={styles.screen}>
          <h2>Upcoming events</h2>
        </section>
        <section className={styles.screen}>
          <h2>Blog</h2>
        </section>
        <section className={styles.screen} id="work-with-me">
          <h2>Work with me</h2>
        </section>
        <section className={styles.screen}>
          <h2>Follow me on Instagram</h2>
          <a
            href="https://instagram.com/isabellecmuller"
            rel="noreferer"
            target="_blank">
            <FaInstagram size="2rem" color="white" />
          </a>
        </section>
      </main>
      {/* </div> */}
    </>
  );
};

export default Home;
