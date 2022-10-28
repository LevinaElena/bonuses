import {Accordion} from "react-bootstrap";
import {FC} from "react";
import {quesAnswType} from "../../types";
import styles from '../../styles/Faq.module.scss';
import Icon from "../icon/Icon";

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
            {/*<Accordion flush={true} defaultActiveKey={['0', '1','2','3','4','5','6','7','8']} alwaysOpen>*/}
                <Accordion className={"accordion accordion-preview"}>
                {qa && qa.map((item) => (
                    <div className={'item'} key={item.id}>
                        <Accordion.Item eventKey={(item.id-1).toString()}>
                            <Accordion.Header><Icon icon='qa' size={28} color="#0460A9" className={'qa-icon'}/>{item.question}</Accordion.Header>
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