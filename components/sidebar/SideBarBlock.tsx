import {FC} from "react";
import Image from "next/image";
import styles from '../../styles/Faq.module.scss'
import SideBar from "./SideBar";
import {number, string} from "prop-types";
import {listItemsType} from "../../types";
import SideBarItem from "./SideBar";

type SideBarBlockProps = {
    sideBarName: string,
    type: string,
    data: Array<listItemsType>
 }

const SideBarBlock:FC<SideBarBlockProps> = ({sideBarName, type, data}) => (
    <>
        <h1 className={styles.side_h1}>
            {sideBarName}
        </h1>
        <SideBarItem type={type} data={data}/>
    </>
);

export default SideBarBlock;