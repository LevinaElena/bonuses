import {GetStaticProps} from "next";
import useSWR from 'swr';
import axios from 'axios';
import { NextPage } from 'next'
import {quesAnswType} from "../types/questAnswType";
import FaqHeader from "../components/faq/FaqHeader";
import FaqBody from "../components/faq/FaqBody";
import styles from "../styles/Faq.module.scss";
import SideBarBlock from "../components/sidebar/SideBarBlock";

type questionAnswerProps = {
    qa?: [quesAnswType]
}

const fetcher = url => axios.get(url).then(res => res.data)

const FaqBlock:NextPage<questionAnswerProps> = ({qa}) => {

    const { data: casino } = useSWR(`https://bonuses-grpem4oxt-levinaelena.vercel.appapi/topcasinos/`,fetcher);
    const { data: topBonuses } = useSWR('https://bonuses-grpem4oxt-levinaelena.vercel.app/api/topbonuses',fetcher);
    const { data: games } = useSWR('https://bonuses-grpem4oxt-levinaelena.vercel.app/api/topgames',fetcher);

    return (
        <div className={styles.container_faq}>
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
    try {
        const response = await fetch(`https://bonuses-grpem4oxt-levinaelena.vercel.app/faq/`);
        const data = await response.json();
        if (!data) {
            return { notFound: true,}
        }
        return {props: {qa: data}}
    } catch {
        return { props: {qa: null}}
    }
}

export default FaqBlock;