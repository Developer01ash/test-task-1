import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from "next/dynamic";


const inter = Inter({ subsets: ['latin'] })
const HomePage = dynamic(() => import('@/containers/Home'), { ssr: true });

interface IProps { }

const Index: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Payment Tracker App</title>
        <meta name="description" content="Payment Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
        <HomePage/>
        </div>
      </main>
    </>
  )
}

export default Index;