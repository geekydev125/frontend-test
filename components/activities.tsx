import { Box, Table } from "@radix-ui/themes";
import Image from "next/image";
import CopyText from "./copytext";

export default function Activities() {

    const transactions = [
        {
            type: 1,
            points: {
                value: 560,
                sign: "+"
            },
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0x5f6dEDEdBA2cA7A4bBbb6f9283B244bB869b2DED",
        },
        {
            type: 1,
            points: {
                value: 560,
                sign: "+"
            },
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0x5f6dEDEdBA2cA7A4bBbb6f9283B244bB869b2DED",
        },
        {
            type: 2,
            points: {
                value: 560,
                sign: "+"
            },
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0x5f6dEDEdBA2cA7A4bBbb6f9283B244bB869b2DED",
        },
        {
            type: 1,
            points: {
                value: 560,
                sign: "+"
            },
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0x5f6dEDEdBA2cA7A4bBbb6f9283B244bB869b2DED",
        },
        {
            type: 2,
            points: {
                value: 560,
                sign: "+"
            },
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0x5f6dEDEdBA2cA7A4bBbb6f9283B244bB869b2DED",
        },
        {
            type: 1,
            points: {
                value: 142,
                sign: ""
            },
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0x5f6dEDEdBA2cA7A4bBbb6f9283B244bB869b2DED",
        },
    ]

    return (
        <Box className="container mt-[30px]">
            <Box className="overflow-auto border">
                <Table.Root className="min-w-[600px] overflow-hidden rounded-[12px]">
                    <Table.Header className="bg-[#16181A]">
                        <Table.Row className="text-[12px] leading-[18px]">
                            <Table.ColumnHeaderCell className="py-[12px] pl-[24px]">Activities</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Points</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>TXID</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell className="rounded-tr-[12px]"></Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            transactions.map((trans, index) => (
                                <Table.Row key={index} className={`text-[12px] border-b-[#000] border-b-[2px] ${index % 2 === 1 ? 'bg-[#111315]':''}`}>
                                    <Table.RowHeaderCell className="text-white flex items-center gap-[4px] py-[22px] pl-[24px]">
                                        <Image 
                                            src={trans.type === 1 ? "/icons/exchange.png" : "/icons/chain.png"}
                                            alt="type"
                                            width={16}
                                            height={16}
                                        />
                                        {trans.type === 1 ? "Transaction" : "Bridged"}
                                    </Table.RowHeaderCell>
                                    <Table.Cell><span className="text-primary bg-[#27D17F] bg-opacity-[0.1] px-[8px] py-[3.5px] rounded-full text-[12px]">{trans.points.sign}{trans.points.value}</span></Table.Cell>
                                    <Table.Cell className="text-[14px]">
                                        {trans.date} <span className="text-[12px] bg-[#16181A] rounded-full px-[8px] py-[3.5px]">{trans.time}</span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {trans.txId.slice(0, 5)}...{trans.txId.slice(trans.txId.length-4)}
                                        <CopyText text={trans.txId}/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a  href={`https://etherscan.io/address/${trans.txId}`} target="_blank">
                                            <Image 
                                                src="/icons/out-link.png" 
                                                alt="Copy" 
                                                width={16} 
                                                height={16} 
                                                className="cursor-pointer"
                                            />
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table.Root>
            </Box>
        </Box>
    )
}