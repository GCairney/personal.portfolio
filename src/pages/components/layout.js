import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import utilStyles from '/src/styles/utils.module.css';
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
          </>
        )}
      </header>
      <main>
            {children}
      </main>
    </div>
  );
}