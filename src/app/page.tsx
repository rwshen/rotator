import { MainImage } from '@/components/MainImage'
import styles from './page.module.css'
import { Title } from '@/components/title'

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title="test"/>
      <section>
        <MainImage />
      </section>
    </main>
  )
}
