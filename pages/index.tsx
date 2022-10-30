import React, {useState} from "react";
import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getBonuses} from '../redux/bonusSlice';
import {wrapper} from "../redux/store";
import { NextPage } from 'next'
import Slider from "../components/home/Slider";

const Home:NextPage = () => {
 const dispatch = useAppDispatch();
 const [type, setType] = useState(1);

    return (
    <div className={'container_bonus'}>
        <div className={styles.description}>
            <h2 className={styles.bonus_h2}>
                Best Bonuses Lorem Ipsum
            </h2>
            <Heading text={'Welcome, all you passionate Australian online casino players out there! If you a rookie looking for some quick guidelines on how to get started or a seasoned player searching for some fresh real money casino recommendations, you\'ve reached the right spot at True Blue!'} tag={'h3'}/>
        </div>
        <div className={styles.tabs_group}>
            <button className={type === 1 ? styles.btn_blue__active : styles.btn_blue} onClick={() => {
                setType(1);
                dispatch(getBonuses(1))}}>No deposit bonus</button>
            <button className={type === 2 ? styles.btn_blue__active : styles.btn_blue} onClick={() => {
                setType(2);
                dispatch(getBonuses(2))}}>Welcome bonus</button>
            <button className={type === 3 ? styles.btn_blue__active : styles.btn_blue} onClick={() => {
                setType(3);
                dispatch(getBonuses(3))}}>Free Spins bonus</button>
        </div>
        <Slider/>
        <div className={styles.single_button}>
            <button className={styles.btn_blue_gradient}>Show All No Deposit Bonuses</button>
        </div>
    </div>)
};

Home.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(getBonuses(1));
        }
);

export default Home;
