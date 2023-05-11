import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Footer from '../pages/components/footer';
import Image from 'next/image';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home({  }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div class="columns-4">
        <Image
          src="/images/laravel.png"
          width={150}
          height={150}
          alt="alt laravel"
        />
        <Image
          src="/images/css.png"
          width={150}
          height={150}
          alt="alt css"
        />
      </div>      
    </Layout>
  );
}
