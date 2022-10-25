import Heading from "../components/Heading";
import Image from "next/image"
import {Button, Card, Collapse} from "react-bootstrap";
import {Accordion} from "react-bootstrap";
import {useAccordionButton} from "react-bootstrap";
import {GetStaticProps} from "next";
import {quesAnswType} from "../types";
import {FC, useContext, useState} from "react";

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

const Faq:FC<questionAnswerProps> = ({qa}) => (
    <>
    <Heading text='FAQ' tag={'h2'}/>
       <div className={'faq-grid'}>
                <Accordion>
                    {qa && qa.map((item) => (
                        <div className={'item'}>
                            <Accordion.Item eventKey={(item.id-1).toString()}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>
                                    <p className={'question'}>{item.answer}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion>

        </div>
    </>
    // const initialState = Array(9).fill(false);
    // const [open, updateOpen] = useState<Boolean[]>(initialState);
    //
    // const onClickQuestion = (id) => {
    //     updateOpen( open => [...open, open[id]=!open[id]]);
    //     console.log(open)
    // };
    //
    // return (
    // <>
    //     <Heading text='FAQ' tag={'h2'}/>
    //     {qa && qa.map((item) => (
    //         <>
    //             <p key={item.id}>
    //                 <a onClick={() => onClickQuestion((item.id-1))}
    //                     className="question"
    //                     data-bs-toggle="collapse"
    //                     role="button"
    //                     aria-expanded={open}
    //                     aria-controls={`question${item.id}`}>
    //                     {item.question}
    //                 </a>
    //             </p>
    //             <Collapse in={open[item.id]}>
    //                 <div className="row">
    //                     <div className="col">
    //                         <div id={`question${item.id}`}>
    //                             <div className="card card-body">
    //                                 Some placeholder content for the first collapse component of this multi-collapse example.
    //                                 This
    //                                 panel is hidden by default but revealed when the user activates the relevant trigger.
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </Collapse>
    //         </>
    //     ))}
    //
    //
    // </>
    // )
);

export default Faq;