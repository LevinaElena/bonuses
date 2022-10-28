import React, {useEffect, useState} from "react";
import Heading from "../components/Heading";
import {bonusCardType} from "../types";
import styles from '../styles/Home.module.scss'
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getBonuses} from '../redux/bonusSlice';
import {wrapper} from "../redux/store";
import { NextPage } from 'next'
import Slider from "../components/home/Slider";

type bonusCardProps = {
    bonuses: [bonusCardType]
}

const Home:NextPage<bonusCardProps> = ({bonuses}) => {
    const [type, setType] = useState('No Deposit Bonus');

    useEffect(() => {
        console.log('type', type)
    }, [type])

    // const { data, pending, error } = useAppSelector((state) => state.bonus);
    // const dispatch = useAppDispatch();
    return (
    <>
        <div className={styles.description}>
            <h2 className={styles.bonus_h2}>
                Best Bonuses Lorem Ipsum
            </h2>
            <Heading text={'Welcome, all you passionate Australian online casino players out there! If you a rookie looking for some quick guidelines on how to get started or a seasoned player searching for some fresh real money casino recommendations, you\'ve reached the right spot at True Blue!'} tag={'h3'}/>
        </div>
        <div className={styles.tabs_group}>
            <button className={styles.btn_blue__active} onClick={() => setType('No Deposit Bonus')}>No deposit bonus</button>
            <button className={styles.btn_blue} onClick={() => setType('Welcome Bonus')}>Welcome bonus</button>
            <button className={styles.btn_blue} onClick={() => setType('Free Spins Bonus')}>Free Spins bonus</button>
        </div>
        <Slider/>
        <div className={styles.single_button}>
            <button className={styles.btn_blue_gradient}>Show All No Deposit Bonuses</button>
        </div>
    </>)
};

Home.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(getBonuses());
        }
);

export default Home;
