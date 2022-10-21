import Image from "next/image";
import {bonusCardType} from "../types";
import {FC} from "react";

type bonusCardProps = {
    bonuses: [bonusCardType]
}

const Bonuses:FC<bonusCardProps> = ({bonuses}) => {
    if (!bonuses) {
        return null;
    }

    return (
        <ul>
            {bonuses && bonuses.map(({id, casinoName, bonusType, upToPercent, upToSum, img, freeSpinsCount, exclusive, slotName}) => (
            <li key={id}>
                <p>{casinoName}</p>
                <p>{bonusType}</p>
                <p>{upToPercent}</p>
                <p>{upToSum}</p>
                <Image src={img} alt={casinoName} width={142} height={59}/>
                <p>{freeSpinsCount}</p>
                <p>{exclusive}</p>
                <p>{slotName}</p>
            </li>
            ))}
        </ul>
    )
}
export default Bonuses;