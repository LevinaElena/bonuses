import {FC} from "react";
import styles from '../../styles/Faq.module.scss';
import {listItemsType} from "../../types/sidebarItemsType";
import SideBarBonus from "./SideBarBonus";

type SideBarBonusesProps = {
    data: Array<listItemsType>
}

const SideBarBonuses:FC<SideBarBonusesProps> = ({data}) => {
     return (
          <div className={styles.sb_block}>
              {data && data.map((item) => {
                    return <SideBarBonus key={item.id} topBonus={item}/>
                })
              }
          </div>
     )
};

export default SideBarBonuses;