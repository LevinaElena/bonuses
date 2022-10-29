import styles from "../../styles/Faq.module.scss";
import {FC} from "react";
import Image from "next/image";
import {listItemsType} from "../../types";
import Icon from "../icon/Icon";
import StyledDiv from '../../utils/bgSidebar';

type SideBarBonusesProps = {
    data: Array<listItemsType>
}

const SideBarBonuses:FC<SideBarBonusesProps> = ({data}) => {
            return (
                <>
                    {data && data.map((item) => (
                        <ul className={`list-group list-group-horizontal ${styles.side_bar_item}`} key={item.id}>
                            <li className={`list-group-item ${styles.left}`}>
                                <StyledDiv color={item.bgColor}>
                                    <Image src={item.img} alt={item.name} width={68} height={28}/>
                                </StyledDiv>
                            </li>
                            <li className={`list-group-item ${styles.right} ribbon-parent`}>
                                <div className={styles.bonus_container}>
                                    <div className={styles.sums}>
                                        {item.isExclusive && <div className={styles.ribbon}><span className={styles.exclusive}>EXCLUSIVE</span></div>}
                                        <div className={styles.line}>
                                            <div className={styles.sb_bonus_text}>{item.upToPercent}% up to</div>
                                            <div className={styles.sb_bonus_text_big}>${new Intl.NumberFormat("en").format(item.upToSum)}</div>
                                        </div>
                                        <div className={styles.sb_bonus_spins}> + {item.upToPercent} Free Spins</div>
                                    </div>
                                    <div className={styles.icon}>
                                        <Icon icon="points" size={22} color='$blue'/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
                </>
            )
};

export default SideBarBonuses;