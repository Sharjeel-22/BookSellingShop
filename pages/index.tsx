import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <div className="card shadow-lg p-3 mb-1 bg-white rounded">
      <div className="card-body">
        <ul className="list-inline text-center mt-2">
          <li className="list-inline-item">
           <Link href={'/'}><a className='text-decoration-none text-info'>Home</a></Link>
          </li>{" "}
          <li className="list-inline-item">
           <Link href={'/addBook'}><a className='text-decoration-none text-info p-2'>Add Book</a></Link>
          </li>{" "}
          <li className="list-inline-item">
           <Link href={'/book'}><a className='text-decoration-none text-info p-2'>Book List</a></Link>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
      </Head>

      <main className={styles.main}>
      <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
          <div className='card-body'>
            <h2 className='text-center text-info'>Wellcome To Book Selling Shop</h2>
            </div>
            </div>
        <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
          <div className='card-body'>
        <Image src="/book.png"  height="600" width="1200" alt="Book Image"></Image>
          </div>
        </div>
      </main>
      <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
          <div className='card-body'>
      <footer className={styles.footer}>
      
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </div>
      </div>
    </div>
  )
}

export default Home
