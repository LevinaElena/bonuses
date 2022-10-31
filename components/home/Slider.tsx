import {Navigation, Pagination, Swiper as SwiperType} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useAppSelector} from "../../redux/hooks";
import React, {useRef, FC} from "react";
import Bonus from "./Bonus";
import styles from '../../styles/Home.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";

const Slider:FC = () => {
    const swiperRef = useRef<SwiperType>();
    const { data, pending, error } = useAppSelector((state) => state.bonus);
    return (
        <div className={styles.swiper_container}>
            <div className={styles.swiper_nav_div}>
                <button onClick={() => swiperRef.current?.slidePrev()} className={'swiper-button-prev'}></button>
            </div>
            <Swiper
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={2}
                pagination={{clickable: true, bulletElement: 'div'}}
                createElements={true}
                navigation={{nextEl:'.swiper-button-next', prevEl: '.swiper-button-prev',}}
                keyboard={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    366: {slidesPerView: 1, spaceBetween: 0, slidesPerGroup:1},
                    576: {slidesPerView: 1, spaceBetween: 0, slidesPerGroup:1},
                    768: {slidesPerView: 2, spaceBetween: 0, slidesPerGroup:2},
                    992: {slidesPerView: 3, spaceBetween: 0, slidesPerGroup:3},
                    1200: {slidesPerView: 4, spaceBetween: 0, slidesPerGroup:4},
                    1400: {slidesPerView: 5, spaceBetween: 0, slidesPerGroup:5},
                    1700: {slidesPerView: 5, spaceBetween: 0, slidesPerGroup:5},
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">

                {!!data.length && data.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Bonus bonus={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <button onClick={() => swiperRef.current?.slideNext()} className={'swiper-button-next'}></button>
            </div>
        </div>
    )};

export default Slider;