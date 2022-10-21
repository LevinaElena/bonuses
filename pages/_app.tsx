import {AppProps} from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
   <Layout>
       <Head>
           <link href='href="https://fonts.googleapis.com/css2?family=Lato&display=swap"'/>
       </Head>
       <div className={'container'}>
            <Component {...pageProps} />
       </div>
   </Layout>

);

export default MyApp;
