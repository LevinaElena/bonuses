import React, {FC} from "react";
import Icon from "../icon/Icon";
import styles from "../../styles/Faq.module.scss";

type IconAndSumProps = {
    icon: string,
    sum: string,
    text: string
}

const IconAndSum:FC<IconAndSumProps> = ({icon, sum, text}) => {
            return (
                <>
                    <Icon icon={icon} size={27} color="$blue"/>
                    <div className={styles.sb_number}>
                        {sum}
                        <span className={styles.sb_small_text}>
                            {text}
                        </span>
                    </div>
                </>
            )
};

export default IconAndSum;