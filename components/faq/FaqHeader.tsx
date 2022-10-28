import {FC} from "react";
import Image from "next/image";
import styles from '../../styles/Faq.module.scss'

const FaqHeader:FC = () => (
    <>
        <div className={styles.heading}>
            <h1 className={styles.faq_h1}>
                FAQ h1
            </h1>
        </div>
        <div className={styles.header_container}>
            <div className={styles.faq_image}>
                <Image src='/faq.png' alt="FAQ Logo" width={200} height={141} />
            </div>
            <div className={styles.faq_text}>
                Nulla eget magna ut purus iaculis dapibus. Vestibulum euismod fringilla gravida. Donec a quam a elit tristique fringilla. Nam ipsum enim, bibendum vitae magna et, placerat porttitor enim. Suspendisse potenti. Donec ut lorem placerat, feugiat magna non, sodales risus. Fusce rutrum suscipit diam, eu tempor erat sollicitudin vel.
            </div>
        </div>
    </>
);
export default FaqHeader;