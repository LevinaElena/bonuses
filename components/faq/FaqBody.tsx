import {Accordion} from "react-bootstrap";
import {FC} from "react";
import {quesAnswType} from "../../types/questAnswType";
import styles from '../../styles/Faq.module.scss';
import Icon from "../icon/Icon";

type questionAnswerProps = {
    qa: [quesAnswType]
}

const FaqBody:FC<questionAnswerProps> = ({qa}) => (
    <>
            <div className={styles.heading}>
                <h2 className={styles.faq_h2}>
                    FAQ lorem ipsum h2
                </h2>
            </div>
            <Accordion className={"accordion accordion-preview"}>
                {!!qa.length && qa.map((item) => (
                    <div className={'item'} key={item.id}>
                        <Accordion.Item eventKey={(item.id-1).toString()}>
                            <Accordion.Header><Icon icon='qa' size={40} color="$blue" className={styles.qa_icon}/>{item.question}</Accordion.Header>
                            <Accordion.Body>
                                <p className={styles.answer}>{item.answer}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                ))}
            </Accordion>
    </>
);

export default FaqBody;