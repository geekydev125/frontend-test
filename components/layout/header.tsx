'use client'
import { useState } from "react";
import { Box } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    const [isProfileOpen, setProfileIsOpen] = useState(false);

    const NavLinkss = [
        {
            name: "Dashboard",
            url: "/",
            active: false
        },
        {
            name: "Tasks",
            url: "/",
            active: false
        },
        {
            name: "Badges",
            url: "/",
            active: true
        },
        {
            name: "Leaderboard",
            url: "/",
            active: false
        },
        {
            name: "Connections",
            url: "/",
            active: false
        },
    ]

    return (
        <Box>
            <Box className="container flex justify-between items-start py-[16px] max-h-[72px]">
                <Box className="flex justify-center items-center gap-[30px]">
                    <Link className="logo" href="/">Logo</Link>

                    <ul className="hidden lg:flex justify-center items-center gap-[8px]">
                        {
                            NavLinkss.map((item, index) => (
                                <li key={index} className="link">
                                    <Link href={item.url} className={`${item.active ? "active":""}`}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </Box>

                <Box className="flex justify-center items-start gap-[4px]">
                    <Button className="hidden sm:flex bg-[#111315] text-[#ABAFB4] border-[1px] border-solid border-[#8AB7B2] font-bold rounded-full py-[13px] px-[11px] h-[40px]">How It works</Button>
                    <Box className={`flex flex-col gap-[8px] font-bold rounded-[12px] ${isProfileOpen ? "p-[4px] bg-[#16181A]": "mx-[4px]"} z-10`}>
                        <Button 
                            className={`font-bold rounded-[12px] px-[12px] h-[40px] ${isProfileOpen ? 'bg-[#0C0E10]':'bg-[#16181A]'}`}
                            onClick={() => setProfileIsOpen(!isProfileOpen)}
                        >
                            <Image 
                                src={"/imgs/user.png"}
                                alt="user"
                                className="rounded-full"
                                width={18}
                                height={18}
                            />
                            <span>bongo.eth</span>
                        </Button>
                        {
                            isProfileOpen && 
                                <Button className="bg-transparent h-[40px] font-bold flex justify-center items-center">
                                    <span className="mr-[8px]">Sign out</span>
                                    <Image 
                                        src={"/icons/out.png"}
                                        alt="out"
                                        width={18}
                                        height={18}
                                    />
                                </Button>
                        }
                    </Box>
                    <span className="cursor-pointer mt-[7px] sm:hidden block">
                        <Image
                            src={"/icons/menu.png"}
                            alt="menu"
                            width={24}
                            height={24}
                        />
                    </span>
                </Box>
            </Box>
            
            <Box className="container">
                <ul className="flex lg:hidden justify-start items-center gap-[8px] flex-wrap bg-[#0C0E10] rounded-[24px] p-[8px]">
                    {
                        NavLinkss.map((item, index) => (
                            <li key={index} className="link">
                                <Link href={item.url} className={`link ${item.active ? "active":""}`}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </Box>

        </Box>
    )
}