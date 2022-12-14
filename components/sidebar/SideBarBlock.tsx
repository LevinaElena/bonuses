import {FC} from "react";
import styles from '../../styles/Faq.module.scss'
import {listItemsType} from "../../types/sidebarItemsType";
import SideBarItem from "./SideBarItem";

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