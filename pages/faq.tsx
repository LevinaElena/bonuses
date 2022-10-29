import {GetStaticProps} from "next";
import useSWR from 'swr';
import axios from 'axios';
import { NextPage } from 'next'
import {quesAnswType} from "../types";
import FaqHeader from "../components/faq/FaqHeader";
import FaqBody from "../components/faq/FaqBody";
import styles from "../styles/Faq.module.scss";
import SideBarBlock from "../components/sidebar/SideBarBlock";

type questionAnswerProps = {
    qa?: [quesAnswType]
}

const fetcher = url => axios.get(url).then(res => res.data)

const FaqBlock:NextPage<questionAnswerProps> = ({qa}) => {

    console.log(process.env.API_HOST)

    const { data: casino } = useSWR(`http://localhost:3000/api/sidebar/`,fetcher);
    const { data: topBonuses } = useSWR('http://localhost:3000/api/topbonuses',fetcher);
    const { data: games } = useSWR('http://localhost:3000/api/topgames',fetcher);

    return (
        <div className={styles.faq_body}>
            <div className={styles.wrapper}>
                 <FaqHeader/>
                 <FaqBody qa={qa}/>
            </div>
            <div className={styles.side_bar}>
                <SideBarBlock sideBarName={'Top Casinos'} data={casino} type={'casino'}/>
                <SideBarBlock sideBarName={'Top Bonuses'} data={topBonuses} type={'topBonuses'}/>
                <SideBarBlock sideBarName={'Top Slot Games'} data={games} type={'games'}/>
            </div>
        </div>
    )
};

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/faq/`);
    const data = await response.json();
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {qa: data}
    }
}

export default FaqBlock;