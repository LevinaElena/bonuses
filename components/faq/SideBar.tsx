import styles from "../../styles/Faq.module.scss";
import {FC} from "react";
//import {getInitialProps} from "next";

import {wrapper} from "../../redux/store";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getCasinos} from "../../redux/casinoSlice";
import Image from "next/image";

const SideBar:FC = () => {
    const { data, pending, error } = useAppSelector((state) => state.casino);
    return (
    <>
        {!!data.length && data.map((item) => (
        <ul className={`list-group list-group-horizontal ${styles.side_bar_item}`}>
            <li className={`list-group-item ${styles.left}`}><Image src={item.img} alt={item.casinoName} width={68} height={28}/></li>
            <li className={`list-group-item ${styles.right}`}><h3>{item.casinoName}</h3><h3>rating {item.rating}Payout {item.payout}</h3></li>
        </ul>
        ))}
    </>
    )};

export default SideBar;