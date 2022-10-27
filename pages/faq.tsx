import {GetStaticProps} from "next";
import { NextPage } from 'next'
import {listItemsType, quesAnswType} from "../types";
import {FC} from "react";
import FaqHeader from "../components/faq/FaqHeader";
import FaqBody from "../components/faq/FaqBody";
import styles from "../styles/Faq.module.scss";
import SideBarBlock from "../components/faq/SideBarBlock";
import {useAppDispatch} from "../redux/hooks";
import {wrapper} from "../redux/store";
import {getCasinos} from "../redux/casinoSlice";
import {getBonuses} from "../redux/bonusSlice";

type questionAnswerProps = {
    qa?: [quesAnswType]
}

// export const getStaticProps:GetStaticProps = async () => {
//     const response = await fetch(`${process.env.API_HOST}/faq/`);
//     const data = await response.json();
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//
//     return {
//         props: {qa: data},
//     }
// }

const FaqBlock:NextPage<questionAnswerProps> = ({qa}) => {
    const dispatch = useAppDispatch();
return(
    <div className={styles.faq_body}>
        {/*<div className={styles.wrapper}>*/}
        {/*     <FaqHeader/>*/}
        {/*     <FaqBody qa={qa}/>*/}
        {/*</div>*/}
        <div className={styles.side_bar}>
            <SideBarBlock sideBarName={'Top Casinos'}/>
            <SideBarBlock sideBarName={'Top Bonuses'}/>
            <SideBarBlock sideBarName={'Top Slot Games'}/>
        </div>
    </div>
)
};

FaqBlock.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(getCasinos());
        }
);

export default FaqBlock;