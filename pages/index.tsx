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
      <main className={styles.main}>
        <div className={styles.thought}>
          We ate vegan hot dogs and drank champagne.
        </div>

        <div className={styles.blink}>
          +
        </div>
        <div className={styles.read}>
          {/* Read */}
        </div>
        <div className={styles.think}>
          {/* think */}
        </div>
        <div className={styles.share}>
          {/* share */}
        </div>
        <div className={styles.cozyThoughts}>
          cozy.
        </div>
      </main>
    </>
  )
}