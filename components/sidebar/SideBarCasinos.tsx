import styles from "../../styles/Faq.module.scss";
import {FC} from "react";
import Image from "next/image";
import StyledDiv from '../../utils/bgSidebar';
import {listItemsType} from "../../types";
import Icon from "../icon/Icon";

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
                                <Icon icon="stars" size={28} color="$blue"/>
                                <div className={styles.sb_number}>
                                    {item.rating}
                                    <span className={styles.sb_small_text}>User Rating</span>
                                </div>
                                <Icon icon="money" size={28} color="$blue"/>
                                <div className={styles.sb_number}>
                                    {item.payout}%
                                    <span className={styles.sb_small_text}>Payout %</span>
                                </div>
                            </li>
                        </ul>
                    ))}
                </>
            )
};

export default SideBarCasinos;