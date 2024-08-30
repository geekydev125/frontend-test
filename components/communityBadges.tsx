'use client'

import { Box } from "@radix-ui/themes"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import { useState } from "react"
import 'swiper/swiper-bundle.css';

export default function CommunityBadges() {

    const [datum, setDatum] = useState([
        {
            img: "/imgs/badges/1.png",
            title: 'Discord OG',
            value: '1.15x',
            selected: true
        },
        {
            img: "/imgs/badges/2.png",
            title: 'Discord OG',
            value: '1.15x',
            selected: true
        }, 
        {
            img: "/imgs/badges/3.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
        {
            img: "/imgs/badges/4.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
        {
            img: "/imgs/badges/5.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
        {
            img: "/imgs/badges/6.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
        {
            img: "/imgs/badges/7.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
        {
            img: "/imgs/badges/6.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
        {
            img: "/imgs/badges/7.png",
            title: 'Discord OG',
            value: '1.15x'
        }, 
    ])

    return (
        <Box className="container">
            <Box className="mt-[16px] bg-[#0C0E10] overflow-hidden rounded-[12px]">
                <p className="bg-[#111315] px-[16px] py-[9px] text-[#F7F7F8] text-[12px]">Community Badges</p>
                <Box className="p-[16px]">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={8}
                        modules={[Grid]}
                        
                        breakpoints={{
                            1200: {
                                slidesPerView: 6.5
                            },
                            1000: {
                                slidesPerView: 4.5
                            },
                            768: {
                                grid: {
                                    rows: 1,
                                    fill: 'row',
                                }
                            },
                            0: {
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                }
                            }
                        }}
                        className="multi-column-swiper"
                    >
                        {
                            datum.map((item, index) => (
                                <SwiperSlide className={`rounded-[12px] overflow-hidden ${item.selected && 'border border-primary'}`}>
                                    <Box key={index} className="bg-[#16181A] text-[12px]">
                                        <p className="p-[8px] bg-[#111315] text-[#F7F7F8]">
                                            {item.title}
                                        </p>
                                        <Image
                                            src={item.img}
                                            alt="badge"
                                            width={64}
                                            height={64}
                                            className="mx-auto my-[24px] rounded-full "
                                        />
                                        <p className="bg-primary text-primary bg-opacity-[0.1] text-center p-[7.5px]">
                                            {
                                                item.value
                                            }
                                        </p>
                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}