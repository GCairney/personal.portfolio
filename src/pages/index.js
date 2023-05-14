import Layout from './components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const name = 'George Cairney';

export default function Home({  }) {
  return (
    <Layout home>
      <div className="grid grid-cols-2">
        <div className="justify-center">
          <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={288}
              width={288}
              alt=""
            />
        </div>
        <div>
          <h1 className={utilStyles.heading2Xl} >{name}</h1>
          <p className="justify-center">
            Welcome to my Personal Portfolio! 
            From work experience to some personal info about me, you can find it all here. 
            This site is designed to be a snippet of who I am and what I have done so far.
          </p>
        </div>
      </div>      
    </Layout>
  );
}
