import Image from "next/image";
import {bonusCardType} from "../types";
import {FC} from "react";

type bonusCardProps = {
    bonus: bonusCardType
}

const Bonuses:FC<bonusCardProps> = ({bonus}) => {
    if (!bonus) {
        return null;
    }
    //const isExclusive = `<div className=\"ribbon\"><span>EXCLUSIVE</span></div>`
    return (
        <div className="card-item">
            <div className='card-header'>
                <Image src={bonus.img} alt={bonus.casinoName} width={185} height={58}/>
                <h4 className="card-header-text">{bonus.casinoName} - Review</h4>
            </div>
            <div className='card-container'>
                <div className="ribbon-parent">
                    {bonus.exclusive && <div className="ribbon"><span>EXCLUSIVE</span></div>}
                    <div className='card-type'>{bonus.bonusType}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <line x1="86" y1="5" x2="156" y2="5" className={'line'}/>
                    </svg>
                </div>
                <div className="card-middle-part">
                    <div className='main-info'>
                        <p className='right-text'>{bonus.upToPercent}% up to</p>
                        <p className='big-text'>${bonus.upToSum}</p>
                        <p className='additional-text'>+{bonus.freeSpinsCount} Free Spins</p>
                        <p className="bottom-text">on {bonus.slotName}</p>
                    </div>
                </div>
                <div className="card-bottom-no-radius row">
                    <div className='col-9 pb-lg-4'>
                        <a href="#" className="btn btn-warning">PLAY</a>
                    </div>
                    <div className='col-3 flag'>
                        <Image src='/flag.png' alt={'Flag'} width={34} height={25}/>
                    </div>
                </div>
                <div className='info position-absolute bottom-0 end-0'>
                    <Image src='/info.png' alt={'info'} width={16} height={16}/>
                </div>
            </div>
            {/*<ul>*/}
            {/*    {bonus && bonus.map(({id, casinoName, bonusType, upToPercent, upToSum, img, freeSpinsCount, exclusive, slotName}) => (*/}
            {/*        <li key={id}>*/}
            {/*            <p>{casinoName}</p>*/}
            {/*            <p>{bonusType}</p>*/}
            {/*            <p>{upToPercent}</p>*/}
            {/*            <p>{upToSum}</p>*/}
            {/*            <Image src={img} alt={casinoName} width={142} height={59}/>*/}
            {/*            <p>{freeSpinsCount}</p>*/}
            {/*            <p>{exclusive}</p>*/}
            {/*            <p>{slotName}</p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    )
}
export default Bonuses;