
'use client'
import { Box } from "@radix-ui/themes"

export default function Howtoearn() {

    const datum = [
        {
            title: "Provide at least $50 Liquidity to USDT/ETH",
            completed: true,
        },
        {
            title: "Provide at least $50 Liquidity to LINK/ETH",
            completed: false,
        },
        {
            title: "Provide at least $100 Liquidity to WBTC/ETH",
            completed: false,
        },
    ]
    return (
        <Box className="mt-[12px] text-[14px]">

            <Box className="flex justify-between items-start md:items-center flex-col md:flex-row gap-[8px]">
                <p className="text-[#F7F7F8]">How to earn: <span className="text-[#ABAFB4]">Complete the actions for the badge, no specific order needed.</span></p>
                <Box className="flex justify-center items-center text-[#ABAFB4] gap-[8px] w-full md:w-auto">
                    <p className="flex-1 text-center whitespace-nowrap py-[3.5px] px-[8px] rounded-full bg-[#16181A]">{`${datum.filter(item => item.completed).length}/${datum.length} Completed`}</p>
                    <p className="flex-1 text-center whitespace-nowrap py-[3.5px] px-[8px] rounded-full bg-primary bg-opacity-[0.1] text-[#006258]">Total Earnings: 3,000</p>
                </Box>
            </Box>

            <Box className="flex justify-between items-center gap-[16px] mt-[16px] flex-col md:flex-row">
                {
                    datum.map((item, index) => (
                        <Box className="flex-1 w-full md:w-auto cursor-pointer" key={index}>
                            <Box key={index} className="bg-[#111315] rounded-[12px] overflow-hidden text-[14px]">
                                <Box className="bg-[#16181A] px-[24px] py-[13px] text-[#ABAFB4] flex justify-between items-center">
                                    <p>Action</p>
                                    {
                                        item.completed && <p className="bg-primary bg-opacity-[0.1] px-[8px] py-[3.5px] text-primary rounded-full">Completed</p>
                                    }
                                </Box>

                                <p className="py-[10px] px-[16px] text-[#ABAFB4]">
                                    {
                                        item.title
                                    }
                                </p>
                            </Box>
                            {/* <Box className={`${item.completed ? 'bg-[#006258]' : 'bg-[#16181A]'} p-[2px] rounded-full mt-[20px]`}/> */}
                        </Box>
                    ))
                }
            </Box>

            <Box className="flex justify-between items-center gap-[16px] mt-[16px]">
                {
                    datum.map((item, index) => (
                        <Box key={index} className={`${item.completed ? 'bg-[#006258]' : 'bg-[#16181A]'} p-[2px] rounded-full mt-[20px] flex-1`}/>
                    ))
                }
            </Box>
        </Box>
    )
}