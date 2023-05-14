import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import utilStyles from '/src/styles/utils.module.css';
import Link from 'next/link';
import Header from '../components/header';



export const siteTitle = 'George\'s Personal Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="George Cairney's personal portfolio"
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <Header/>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              // priority
              src="/images/homebackground.jpg"
              className={utilStyles.landingImage}
              fill
              alt=""
            />
          </>
        ) : (
          <>
            {/* <Link href="/">
              <Image
                priority
                src="/images/me.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>
            {children}
      </main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
    </div>
  );
}