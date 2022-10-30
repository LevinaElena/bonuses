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
import {  ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

const Slider:FC = () => {
    const swiperRef = useRef<SwiperType>();
    const { data, pending, error } = useAppSelector((state) => state.bonus);
    return (
        <div className={styles.swiper_container}>
            <ChevronLeft className={'chevron-left'} size={72} onClick={() => swiperRef.current?.slidePrev()} />
            <Swiper
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={2}
                pagination={{clickable: true, bulletElement: 'div'}}
                //createElements={true}
                // navigation={{nextEl:'.swiper-button-next', prevEl: '.swiper-button-prev',}}
                keyboard={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    336: {
                        slidesPerView: 1, spaceBetween: 0, slidesPerGroup:1, centeredSlides: true,
                    },
                    576: {
                        slidesPerView: 1, spaceBetween: 0, slidesPerGroup:1, centeredSlides: true, centeredSlidesBounds:true,
                    },
                    768: {
                        slidesPerView: 2, spaceBetween: 5, slidesPerGroup:2, centeredSlides: false,
                    },
                    992: {
                        slidesPerView: 3, spaceBetween: 5, slidesPerGroup:3, centeredSlides: false,
                    },
                    1200: {
                        slidesPerView: 4, spaceBetween: 2, slidesPerGroup:4, centeredSlides: false,
                    },
                    1400: {
                        slidesPerView: 4, spaceBetween: 2, slidesPerGroup:4, centeredSlides: false,
                    },
                    1700: {
                        slidesPerView: 5, spaceBetween: 5, slidesPerGroup:5, centeredSlides: false,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {!!data.length && data.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Bonus bonus={item}/>
                    </SwiperSlide>
                ))}
        </Swiper>
                <ChevronRight className={'chevron-right'} size={72} onClick={() => swiperRef.current?.slideNext()}/>
        </div>
    )};

export default Slider;