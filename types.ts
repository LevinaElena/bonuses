import {number, string} from "prop-types";

export type bonusCardType = {
    id: number,
    casinoName: string,
    bgColor: string,
    bonusType: number,
    upToPercent: number,
    upToSum: number,
    img: string,
    freeSpinsCount: number,
    exclusive: boolean,
    slotName: string
}

export type quesAnswType = {
    id: number,
    question: string,
    answer: string,
}

export type listItemsType = {
    id: number,
    name: string,
    bgColor: string,
    rating: number,
    payout: number,
    img: string,
    isExclusive: boolean,
    upToPercent: number,
    upToSum: number,
    freeSpins: number,
    wagering: number,
    cashout: number,
    company: string,
    RTP: number,
}