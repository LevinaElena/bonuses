import React, {FC, useState} from 'react';
import styles from "../../styles/Faq.module.scss";
import StyledDiv from "../../utils/bgSidebar";
import Image from "next/image";
import Icon from "../icon/Icon";
import {listItemsType} from "../../types/sidebarItemsType";
import IconAndSum from "./IconAndSum";

type SideBarBonusesProps = {
    topBonus: listItemsType
}

const SideBarBonus:FC<SideBarBonusesProps> = ({topBonus}) => {
    const [hover, setHover] = useState(false);
    return (
        <ul onMouseEnter={() => {setHover(true);}}
            onMouseLeave={() => {setHover(false);}}
            className={`list-group list-group-horizontal ${styles.side_bar_item}`} key={topBonus.id}>
            {!hover ?
                <>
                    <li className={`list-group-item ${styles.left}`}>
                        <StyledDiv color={topBonus.bgColor}>
                            <Image src={topBonus.img} alt={topBonus.name} width={68} height={28}/>
                        </StyledDiv>
                    </li>
                    <li className={`list-group-item ${styles.right} ribbon-parent`}>
                        <div className={styles.bonus_container}>
                            <div className={styles.sums}>
                                {topBonus.isExclusive && <div className={styles.ribbon}><span className={styles.exclusive}>EXCLUSIVE</span></div>}
                                <div className={styles.line}>
                                    <div className={styles.sb_bonus_text}>{topBonus.upToPercent}% up to</div>
                                    <div className={styles.sb_bonus_text_big}>${new Intl.NumberFormat("en").format(topBonus.upToSum)}</div>
                                </div>
                                <div className={styles.sb_bonus_spins}> + {topBonus.upToPercent} Free Spins</div>
                            </div>
                            <div className={styles.icon}>
                                <Icon icon="points" size={22} color='$blue'/>
                            </div>
                        </div>
                    </li>
                </>:
                <li className={`list-group-item ${styles.bonus_hover}`}>
                    <div>
                        <IconAndSum icon={'coins'} sum={`x${topBonus.wagering}`} text={'Wagering'}/>
                    </div>
                    <div>
                        <IconAndSum icon={'money'} sum={`${topBonus.cashout}`} text={'Max. Cashout'}/>
                    </div>
                    <div className={styles.button_container}>
                        <button className={styles.button_cropped}>PLAY</button>
                    </div>
                </li>
            }
        </ul>
    )
};

export default SideBarBonus;