import {FC} from "react";
import Image from "next/image";
import styles from '../../styles/Faq.module.scss'
import SideBar from "./SideBar";
import {number, string} from "prop-types";

type SideBarBlockProps = {
    sideBarName: string,
 }

const SideBarBlock:FC<SideBarBlockProps> = ({sideBarName}) => (
    <>
        <h1 className={styles.side_h1}>
            {sideBarName}
        </h1>
        <SideBar/>
    </>
);

export default SideBarBlock;