"use client"
import Image from 'next/image'
import mark from '../assets/Mark.svg'
import { useRouter } from 'next/navigation'


export default function Logo() {
    const router = useRouter()
    return (
        <div onClick={() => {
            router.push('/')
        }} className="flex flex-row gap-x-2 font-semibold items-center cursor-pointer">
            <span>
                <Image src={mark} alt="logo" />
            </span>
            <span>
                Creatortools.ai
            </span>
        </div>
    )
}