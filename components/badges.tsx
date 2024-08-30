'use client'

import { useState, useEffect, useRef } from "react";
import { Box } from "@radix-ui/themes";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from "swiper/modules";
import Image from "next/image";
import Howtoearn from "./howtoearn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

export default function Badges() {

    const [activeIndex, setActiveIndex] = useState(0);

    const datum = [
        {
            image: "/imgs/badges/1.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
        {
            image: "/imgs/badges/2.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
        {
            image: "/imgs/badges/3.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
        {
            image: "/imgs/badges/4.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
        {
            image: "/imgs/badges/5.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
        {
            image: "/imgs/badges/6.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
        {
            image: "/imgs/badges/7.png",
            title: "Liquidity Machine",
            action: 3,
            value: "1.15x",
            detail: "Liquidity Provision to ETH/USDC",
        },
    ]

    return (
        <Box className="container">
            <p className="text-[12px] text-[#ABAFB4] mt-[24px]">Badges</p>
            <Box className="bg-[#0C0E10] px-[24px] py-[16px] rounded-[24px] mt-[16px]">
                <Box className="flex items-center gap-[16px] md:gao-[30px] lg:gap-[52px]">
                    <div className="swiper-prev p-[12px] bg-[#16181A] rounded-full h-[244px] flex items-center cursor-pointer">
                        <Image 
                            src={"/icons/prev.png"}
                            alt="prev"
                            width={23}
                            height={23}
                        />
                    </div>
                    {/* ----------------------------------------------- */}
                    <div className="slider-container flex-1 overflow-hidden">
                        <Swiper
                            onSwiper={s => {
                                setActiveIndex(s.activeIndex)
                            }}
                            onSlideChange={(s) => {
                                setActiveIndex(s.activeIndex)
                            }}
                            centeredSlides={true}
                            className="flex-row"
                            initialSlide={3}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                    centeredSlides: true,
                                    effect: "none",
                                },
                                768: {
                                    slidesPerView: 3,
                                    centeredSlides: true,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    centeredSlides: true,
                                },
                            }}
                            effect="creative"
                            modules={[EffectCreative, Navigation]}
                            navigation={{
                                nextEl: ".swiper-next",
                                prevEl: ".swiper-prev",
                            }}
                            creativeEffect={{
                                prev: {
                                    opacity: 0.5,
                                    translate: ["-210%", 0, -200],
                                    scale: 0.75,
                                },
                                next: {
                                    opacity: 0.5,
                                    translate: ["210%", 0, -200],
                                    scale: 0.75,
                                },
                                limitProgress: 4,
                                progressMultiplier: 0.5,
                            }}
                        >
                            {
                                datum.map((item, index) => (
                                    <SwiperSlide key={index} className="">
                                        {
                                            activeIndex === index ? (
                                                <ActiveTab {...item} />
                                            ) : (
                                                <InactiveTab image={item.image} />
                                            )
                                        }
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {/* ----------------------------------------------- */}
                    <div className="swiper-next p-[12px] bg-[#16181A] rounded-full h-[244px] flex items-center cursor-pointer">
                        <Image 
                            src={"/icons/next.png"}
                            alt="next"
                            width={23}
                            height={23}
                        />
                    </div>
                </Box>
            <Howtoearn />
            </Box>
        </Box>
    )
}

const InactiveTab = ({ image }: { image: string }) => {
    return (
      <div className="space-y-2">
        <div className=" aspect-square rounded-3xl bg-darkContainer flex items-center justify-center">
          <div className="bg-text rounded-full w-20 aspect-square">
            <img
              src={image}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="bg-darkContainer w-full space-y-2 p-2 rounded-xl">
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="bg-secondaryText h-3 rounded-xl" />
            <div className="bg-secondaryText h-3 rounded-xl" />
            <div className="bg-secondaryText h-3 rounded-xl" />
          </div>
          <div className="bg-secondaryText h-3 rounded-xl w-full" />
        </div>
      </div>
    );
  };
  const ActiveTab = ({image, title, value, action, detail}: {image: string, title: string, value: string, action: number, detail: string}) => {
    return (
      <div className="space-y-2">
        <div className="flex-col aspect-square rounded-xl bg-darkContainer text-[12px] flex justify-between">
          <div className="flex text-xs justify-between bg-darkContainer2 rounded-t-xl p-[8px] items-center">
            <h4 className="text-text">{title}</h4>
            <h4 className="text-[#ABAFB4]">{action} actions</h4>
          </div>
          <div className="flex py-6 items-center justify-center">
            <div className="bg-text rounded-full w-20 aspect-square">
              <img
                src={image}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex p-2 bg-primary/20 rounded-b-xl items-center justify-center text-primary">
            <h4>{value}</h4>
          </div>
        </div>
        <div className="bg-darkContainer text-xs w-full items-center text-center p-2 rounded-xl">
          <h4 className="text-[#F7F7F8]">Reward Details</h4>
          <h4 className="text-[#ABAFB4]">{detail}</h4>
        </div>
      </div>
    );
  };
  