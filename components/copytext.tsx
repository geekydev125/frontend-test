'use client'
import { toast } from "react-toastify";
interface CopyTextProps {
    text: string
}

export default function CopyText({text}: CopyTextProps) {
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(text);
          toast('The address is copied')
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    };
    return (
        <span onClick={copyToClipboard} className="cursor-pointer text-[12px] px-[8px] py-[3.5px] bg-[#16181A] rounded-full ml-[8px]">
            Copy
        </span>
    )
}