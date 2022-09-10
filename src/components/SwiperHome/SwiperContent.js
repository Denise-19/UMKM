import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from './SwiperCard';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    swiper: {
        marginLeft: '50px',
        backgroundColor: '#fff',
        [theme.breakpoints.down(768)]: { //mobile 768
            margin: '0'
        }
    },
}));

const SwiperContent = () => {
    const classes = useStyles();
    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                }}
                modules={[Navigation]}
                className={classes.swiper}
            >
                <SwiperSlide><SwiperCard title={'Peternakan'} desc='Breeding Domba Garut' activeSlot={40} sumSlot={100} estMargin='15%-20%' periode='1 tahun' imageUrl={'../assets/images/ContentHome1.png'} /></SwiperSlide>
                <SwiperSlide><SwiperCard title={'Peternakan'} desc='Breeding Domba Garut' activeSlot={40} sumSlot={100} estMargin='15%-20%' periode='1 tahun' imageUrl={'../assets/images/ContentHome1.png'} /></SwiperSlide>
                <SwiperSlide><SwiperCard title={'Peternakan'} desc='Breeding Domba Garut' activeSlot={40} sumSlot={100} estMargin='15%-20%' periode='1 tahun' imageUrl={'../assets/images/ContentHome1.png'} /></SwiperSlide>
                <SwiperSlide><SwiperCard title={'Peternakan'} desc='Breeding Domba Garut' activeSlot={40} sumSlot={100} estMargin='15%-20%' periode='1 tahun' imageUrl={'../assets/images/ContentHome1.png'} /></SwiperSlide>
                <SwiperSlide><SwiperCard title={'Peternakan'} desc='Breeding Domba Garut' activeSlot={40} sumSlot={100} estMargin='15%-20%' periode='1 tahun' imageUrl={'../assets/images/ContentHome1.png'} /></SwiperSlide>

            </Swiper>
        </>
    )
};

export default SwiperContent;