import Heading from "../components/Heading";
import Image from "next/image";
import {GetStaticProps} from 'next';
import {bonusCardType} from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../styles/Home.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";

import Bonuses from "../components/Bonuses";
import {FC} from "react";

type bonusCardProps = {
    bonuses: [bonusCardType]
}

import {Autoplay, Controller, Navigation, Pagination} from "swiper";

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/bonuses/`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {bonuses: data}
    }
}

const Home:FC<bonusCardProps> = ({bonuses}) => (
    <>
        <div className='description'>
            <Heading text={'Best Bonuses Lorem Ipsum'} tag={'h2'}/>
            <Heading text={'Welcome, all you passionate Australian online casino players out there! If you a rookie looking for some quick guidelines on how to get started or a seasoned player searching for some fresh real money casino recommendations, you\'ve reached the right spot at True Blue!'} tag={'h3'}/>
        </div>
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            // autoplay={{
            //     delay: 3000,
            // }}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><h2>Slide 1</h2></SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='card-header'>
                        <Image src={'/ozwin.png'} alt={'Title'} width={185} height={58}/>
                        <h4 className="card-title">Ripper Casino - Review</h4>
                    </div>
                        <div className="ribbon-parent">
                            <div className="ribbon">
                                <span>EXCLUSIVE</span>
                            </div>
                            <div className='card-type'>NO DEPOSIT BONUS</div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <line x1="86" y1="5" x2="156" y2="5" className={'line'}/>
                            </svg>
                        </div>
                        <div className="card-title">
                            <div className='main-info'>
                                <p className='right-text'>400% up to</p>
                                <p className='big-text'>$4,400</p>
                                <p className='additional-text'>+100 Free Spins</p>
                                <p className="bottom-text">on Cleopatras Gold</p>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <a href="#" className="btn btn-warning">PLAY</a>
                            <a className="flag-img"><Image src={'/flag.png'} alt={'Flag'} width={34} height={25}/></a>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><h2>Slide 3</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 4</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 5</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 6</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 7</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 8</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 9</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 10</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 11</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 12</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 13</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 14</h2></SwiperSlide>
            <SwiperSlide><h2>Slide 15</h2></SwiperSlide>
        </Swiper>
        {/*<div className='description'>*/}
        {/*    <Bonuses bonuses={bonuses}/>*/}
        {/*</div>*/}
    </>
);

export default Home;

//
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
//
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>
//
//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>
//
//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>
//
//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>
//
//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>
//
//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//
//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
