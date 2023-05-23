import Navbar from '@/components/Navbar'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar/>
    </main>
  )
}
