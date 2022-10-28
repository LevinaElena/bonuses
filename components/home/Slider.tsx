import {Autoplay, Navigation, Pagination, Swiper as SwiperType} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Bonus from "./Bonuses";
import React, {useRef} from "react";
import {FC} from "react";
import styles from '../../styles/Home.module.scss'
import {useAppSelector} from "../../redux/hooks";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";


const Slider:FC = () => {

    const swiperRef = useRef<SwiperType>();
    const { data, pending, error } = useAppSelector((state) => state.bonus);
    return (
        <div className={styles.swiper_container}>
            <div>
                <button onClick={() => swiperRef.current?.slidePrev()} className={'swiper-button-prev'}></button>
            </div>
        <Swiper
            slidesPerView={5}
            //cssMode={true}
            slidesPerGroup={5}
            spaceBetween={5}
            pagination={{
                clickable: true,
                bulletElement: 'div'
            }}
            createElements={true}
            navigation={{nextEl:'.swiper-button-next', prevEl: '.swiper-button-prev',}}
            keyboard={true}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            breakpoints={{
                336: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                    slidesPerGroup:1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    slidesPerGroup:2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    slidesPerGroup:2,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                    slidesPerGroup:3,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                    slidesPerGroup:4,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                    slidesPerGroup:4,
                },
                1700: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                    slidesPerGroup:5,
                },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            {!!data.length && data.map((item) => (
                <SwiperSlide>
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