import styles from "../../styles/Faq.module.scss";
import {FC} from "react";
import Image from "next/image";
import {listItemsType} from "../../types";
import Icon from "../icon/Icon";

type SideBarItemProps = {
    type: string,
    data: Array<listItemsType>
}

const SideBarItem:FC<SideBarItemProps> = ({type, data}) => {
    switch (type) {
        case 'casino':
            return (
                <>
                    {data && data.map((item) => (
                        <ul className={`list-group list-group-horizontal ${styles.side_bar_item}`} key={item.id}>
                            <li className={`list-group-item ${styles.left}`}>
                                <Image src={item.img} alt={item.name} width={68} height={28}/>
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
        case 'topBonuses':
            return (
                <>
                    {data && data.map((item) => (
                        <ul className={`list-group list-group-horizontal ${styles.side_bar_item}`} key={item.id}>
                            <li className={`list-group-item ${styles.left}`}>
                                <Image src={item.img} alt={item.name} width={68} height={28}/>
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
        case 'games':
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
    }
};

export default SideBarItem;