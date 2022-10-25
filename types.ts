export type bonusCardType = {
    id: number,
    casinoName: string,
    bonusType: string,
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