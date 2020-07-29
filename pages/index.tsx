import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Laytout from '../src/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>
      <Laytout/>
      {/* <img src="/images/image-1.png" alt="Vercel" className={styles.logo}/> */}

    </>
  )
}