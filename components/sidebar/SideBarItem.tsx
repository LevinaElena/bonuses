import styles from "../../styles/Faq.module.scss";
import {FC} from "react";
import Image from "next/image";
import {listItemsType} from "../../types/sidebarItemsType";
import Icon from "../icon/Icon";
import SideBarCasinos from "./SideBarCasinos";
import SideBarBonuses from "./SideBarBonuses";
import SideBarGames from "./SideBarGames";

type SideBarItemProps = {
    type: string,
    data: Array<listItemsType>
}

const SideBarItem:FC<SideBarItemProps> = ({type, data}) => {
    switch (type) {
        case 'casino':
            return <SideBarCasinos data={data}/>
        case 'topBonuses':
            return <SideBarBonuses data={data}/>
        case 'games':
            return <SideBarGames data={data}/>
    }
};

export default SideBarItem;