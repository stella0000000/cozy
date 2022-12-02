import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 3000);
    return () => clearInterval(interval)
  }, []);
  
  return (
    <>
      <Head>
        <title>☾ mångata ﹏˚｡⋆ ♥</title>
        <meta name="description" content="think cozy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.thought}>
          I saw a bunny hopping around in the snow outside my apartment window.
        </div>

        <div className={styles.blink}>
          +
        </div>
        <div className={styles.read}>
          Read
        </div>
        <div className={styles.think}>
          think
        </div>
        <div className={styles.contribute}>
          contribute
        </div>
        <div className={styles.cozyThoughts}>
          cozy memories.
        </div>
      </main>
    </>
  )
}