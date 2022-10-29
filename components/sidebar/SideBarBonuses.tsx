import {FC} from "react";

import {listItemsType} from "../../types";
import SideBarBonus from "./SideBarBonus";

type SideBarBonusesProps = {
    data: Array<listItemsType>
}

const SideBarBonuses:FC<SideBarBonusesProps> = ({data}) => {
            return (
                <>
                    {data && data.map((item) => {
                      return <SideBarBonus key={item.id} topBonus={item}/>
                    })}
                </>
            )
};

export default SideBarBonuses;