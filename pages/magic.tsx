import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Magic() {  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.thought}>
          <Image src='/mermaid.png' alt={"my best friend is a mermaid princess professor"} width={500} height={500} />
        </div>

        <div className={styles.blink}>
          +
        </div>
        <div className={styles.read}>
          {/* Notice */}
        </div>
        <div className={styles.think}>
          {/* capture */}
        </div>
        <div className={styles.share}>
          {/* share */}
        </div>
        <div className={styles.cozyThoughts}>
          magic.
        </div>
      </main>
    </>
  )
}