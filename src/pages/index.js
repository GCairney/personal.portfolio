import Layout from './components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts'
import Image from 'next/image';

const name = 'George Cairney';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({  }) {
  return (
    <Layout home>
      <div className="justify-center align-middle">
        <div className="flex justify-evenly">
          <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={260}
              width={260}
              alt=""
          />
        </div>
        <div className="grid items-center justify-center grid-cols-1 rounded-md">
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <p className="">
            Welcome to my Personal Portfolio! 
            From work experience to some personal info about me, you can find it all here. 
            This site is designed to be a snippet of who I am and what I have done so far.
          </p>
        </div>
      </div>      
    </Layout>
  );
}
