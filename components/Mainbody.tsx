"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRouter } from "next/navigation"
import star from "../assets/star_vector.svg"
import starBadge from "../assets/star.svg"
import heartBadge from "../assets/heart.svg"
import plusoneBadge from "../assets/plusone.svg"
import thumbsupBadge from "../assets/thumbsup.svg"
import {
    faChevronRight,
    faArrowDown
} from "@fortawesome/free-solid-svg-icons";

const Badge = () => {
    return (
        <div className="flex flex-row gap-x-1 border px-1 border-gray-200 border-solid rounded-full">
            <Image src={star} alt="star" />
            <span>All the top creator tools in one place</span>
            <Image src={star} alt="star" />
        </div>
    )
}

export const MainBody = () => {
    const router = useRouter()
    return (
        <div className="relative flex flex-col gap-y-8 items-center">
            <Image className={'absolute top-[100px] right-[-25px]'} src={starBadge} alt="star" />
            <Image className={'absolute top-[125px] left-[-25px]'} src={heartBadge} alt="heart" />
            <Image className={'absolute top-[200px] right-[-100px]'} src={plusoneBadge} alt="plusone" />
            <Image className={'absolute top-[250px] left-[-100px]'} src={thumbsupBadge} alt="thumbsup" />
            <Badge />
            <h1 className="text-5xl max-w-[650px] text-center leading-tight">
                <span className=" text-pink-500">Top Creator tools </span>
                <span>for making those </span>
                <span className="font-semibold">videos go viral 🚀</span>
            </h1>
            <p className="max-w-[700px] text-lg text-gray-500 text-center">
                We are ready to be your creator co-pilot. Generate ideas, SEO friendly blogs & Linkedin posts from videos, Audiograms
            </p>
            <button onClick={() => {
                router.push('/login')
            }} className="bg-pink-500 text-white p-3 rounded-lg flex flex-row gap-x-1 justify-center items-center">
                Login and Explore
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </button>
            <p className={'flex flex-row gap-x-2 items-center justify-center text-pink-500'}>
                <FontAwesomeIcon className={'text-pink-200'} icon={faArrowDown} />
                scroll down to explore
                <FontAwesomeIcon className={'text-pink-200'} icon={faArrowDown} />
            </p>
        </div>
    )
}