import styles from "../../styles/Faq.module.scss";
import {FC} from "react";
import Image from "next/image";
import {listItemsType} from "../../types";
import Icon from "../icon/Icon";

type SideBarGamesProps = {
    data: Array<listItemsType>
}

const SideBarGames:FC<SideBarGamesProps> = ({data}) => {
            return (
                <>
                    {data && data.map((item) => (
                        <ul className={`list-group list-group-horizontal ${styles.side_bar_item}`} key={item.id}>
                            <li className={`list-group-item ${styles.left}`}>
                                    <Image src={item.img} alt={item.name} width={80} height={60}/>
                            </li>
                            <li className={`list-group-item ${styles.right}`}>
                                <h5 className={styles.sb_name_inline}>{item.name}</h5>
                                <span className={styles.sb_small_text}> by {item.company}</span><br/>
                                <Icon icon="stars" size={28} color="$blue"/>
                                <div className={styles.sb_number}>
                                    {item.rating}
                                    <span className={styles.sb_small_text}>User Rating</span>
                                </div>
                                <Icon icon="money" size={28} color="$blue"/>
                                <div className={styles.sb_number}>
                                    {item.RTP}%
                                    <span className={styles.sb_small_text}>% RTP</span>
                                </div>
                            </li>
                        </ul>
                    ))}
                </>
            )
};

export default SideBarGames;