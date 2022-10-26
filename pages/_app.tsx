import {AppProps} from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import {Provider} from "react-redux";
import {store} from "../redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
   <Layout>
       <Head>
           {/*<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap"/>*/}
           {/*<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"/>*/}
           {/*/!*<link href="https://fonts.googleapis.com/css2?family=Roboto:400,700,400normal"/>*!/*/}
       </Head>
       <Provider store={store}>
           <div className={'container'}>
                <Component {...pageProps} />
           </div>
       </Provider>
   </Layout>

);

export default MyApp;
