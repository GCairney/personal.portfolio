import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Footer from '../pages/components/footer';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div class="columns-2">
        <Image
          src="/images/laravel.png"
          width={300}
          height={300}
          alt="alt laravel"
        />
        <Image
          src="/images/css.png"
          width={300}
          height={300}
          alt="alt css"
        />
      </div>
      <section className={utilStyles.headingMd}>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      
      <Footer/>
    </Layout>
    
  );
}

// import Image from 'next/image'
// import Head from 'next/head'
// import Link from 'next/link';

// import { prefix } from 'prefix.js';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })



// export default function Home() {
//   return (
//     <div>
//       <Head>
//           <title>George Cairney&apos;s Portfolio</title>
//           <meta property="og:title" content="George Cairney Portfolio" key="title" />
//       </Head>
    
//       <main className="flex flex-col items-center justify-between min-h-screen p-24">
//         <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
//           <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//             Get started by editing&nbsp;
//             <code className="font-mono font-bold">src/pages/index.js</code>
//           </p>
//         </div>


//         <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//             <h1 className="title">
//                 Read <Link href="/posts/first-post">this page!</Link>
//             </h1>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//               Learn{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p
//               className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//             >
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//               Templates{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p
//               className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//             >
//               Discover and deploy boilerplate example Next.js&nbsp;projects.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//               Deploy{' '}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p
//               className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//             >
//               Instantly deploy your Next.js site to a shareable URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </div>
//   )
// }
