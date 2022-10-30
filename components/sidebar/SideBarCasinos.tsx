import styles from "../../styles/Faq.module.scss";
import React, {FC} from "react";
import Image from "next/image";
import StyledDiv from '../../utils/bgSidebar';
import {listItemsType} from "../../types/sidebarItemsType";
import IconAndSum from "./IconAndSum";

type SideBarCasinosProps = {
    data: Array<listItemsType>
}

const SideBarCasinos:FC<SideBarCasinosProps> = ({data}) => {
    return (
        <>
            {data && data.map((item) => (
                <ul className={`list-group list-group-horizontal ${styles.side_bar_item}`} key={item.id}>
                    <li className={`list-group-item ${styles.left}`}>
                        <StyledDiv color={item.bgColor}>
                            <Image src={item.img} alt={item.name} width={68} height={28}/>
                        </StyledDiv>
                    </li>
                    <li className={`list-group-item ${styles.right}`}>
                        <h5 className={styles.sb_name}>{item.name} Casino</h5>
                        <IconAndSum icon={'stars'} sum={item.rating.toString()} text={'User Rating'}/>
                        <IconAndSum icon={'money'} sum={`${item.payout}%`} text={'Payout %'}/>
                    </li>
                </ul>
            ))}
        </>
    )
};

export default SideBarCasinos;