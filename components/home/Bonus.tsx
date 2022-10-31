import Image from "next/image";
import {bonusCardType} from "../../types/bonusCardType";
import {FC} from "react";
import styles from '../../styles/Card.module.scss';
import StyledHeaderDiv from "../../utils/bgCardHeader";
import {bonusType} from "../../utils/common";

type bonusCardProps = {
    bonus: bonusCardType
}

const Bonus:FC<bonusCardProps> = ({bonus}) => {

    return (
        <div className={styles.card_item}>
            <div className={styles.card_header}>
                <StyledHeaderDiv color={bonus.bgColor}>
                    <img src={bonus.img} alt={bonus.casinoName}/>
                    <h4 className="card-header-text">{bonus.casinoName} - Review</h4>
                </StyledHeaderDiv>
            </div>
            <div className={styles.card_container}>
                <div className="ribbon-parent">
                    {bonus.exclusive && <div className="ribbon"><span>EXCLUSIVE</span></div>}
                    <div className={styles.card_type}>{bonusType[bonus.bonusType]}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <line x1="86" y1="5" x2="156" y2="5" className={styles.line}/>
                    </svg>
                </div>
                <div className={styles.card_middle_part}>
                    <div className={styles.main_info}>
                        <p className={styles.right_text}>{bonus.upToPercent}% up to</p>
                        <p className={styles.big_text}>${new Intl.NumberFormat("en").format(bonus.upToSum)}</p>
                        <p className={styles.additional_text}>+{bonus.freeSpinsCount} Free Spins</p>
                        <p className={styles.bottom_text}>on {bonus.slotName}</p>
                    </div>
                </div>
                <div className={styles.card_bottom_no_radius}>
                    <div className={`col-9 ${styles.play}`}>
                        <a href="#" className="btn btn-warning">PLAY</a>
                    </div>
                    <div className={`col-3 ${styles.flag}`}>
                        <Image src='/flag.png' alt={'Flag'} width={34} height={25}/>
                    </div>
                </div>
                <div className='info position-absolute bottom-0 end-0'>
                    <Image src='/info.png' alt={'info'} width={16} height={16}/>
                </div>
            </div>
        </div>
    )
}
export default Bonus;