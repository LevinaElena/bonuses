import {Accordion} from "react-bootstrap";
import {FC} from "react";
import {quesAnswType} from "../../types";
import styles from '../../styles/Faq.module.scss';
import Icon from "./Icon";
type questionAnswerProps = {
    qa: [quesAnswType]
}

const FaqBody:FC<questionAnswerProps> = ({qa}) => (
    <>
        < div className={styles.wrapper}>
            <div className={'heading'}>

                <h2 className={styles.faq_h2}>
                    FAQ lorem ipsum h2
                </h2>
            </div>
            <Accordion>
                {!!qa.length && qa.map((item) => (
                    <div className={styles.item}>
                        <Accordion.Item eventKey={(item.id-1).toString()}>
                            <Icon icon="chat" size={28} color="#5096ec"/>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>
                                <p className={styles.answer}>{item.answer}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                ))}
            </Accordion>
        </div>
    </>
);

export default FaqBody;