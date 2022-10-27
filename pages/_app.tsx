import {AppProps} from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import '../styles/globals.scss'
import {wrapper} from "../redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
   <Layout>
       <Head>
       </Head>
           <div className={'container'}>
                <Component {...pageProps} />
           </div>
   </Layout>

);

export default wrapper.withRedux(MyApp);
