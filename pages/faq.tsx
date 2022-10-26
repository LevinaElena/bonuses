import {GetStaticProps} from "next";
import {quesAnswType} from "../types";
import {FC} from "react";
import FaqHeader from "../components/faq/FaqHeader";
import FaqBody from "../components/faq/FaqBody";
import styles from "../styles/Faq.module.scss";

type questionAnswerProps = {
    qa: [quesAnswType]
}

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

const FaqBlock:FC<questionAnswerProps> = ({qa}) => (
    <div className={styles.wrapper}>
         <FaqHeader/>
         <FaqBody qa={qa}/>
    </div>
);

export default FaqBlock;