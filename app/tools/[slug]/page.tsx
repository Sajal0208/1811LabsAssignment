"use client"
import Logo from "@/components/Logo";
import { PostCards } from "@/components/PostCards";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogGenerator({ params }: {
    params: {
        slug: string;
    }
}) {
    console.log(params)
    const [url, setUrl] = useState('')
    const [tone, setTone] = useState('')
    const router = useRouter()

    const onGenerate = () => {
        console.log(url, tone)
        router.push(`/tools/${params.slug}/result?url=${url}&tone=${tone}`)
    }

    return (
        <div className="flex flex-row items-start justify-start w-full min-h-screen">
            <div className="px-40 pt-12 basis-7/12 min-h-screen h-full">
                <div className="gap-y-8 flex flex-col items-start justify-start max-w-[400px] ">
                    <Logo />
                    <p className="text-4xl font-semibold leading-normal">
                        {params.slug}
                    </p>
                    <p className="text-gray-500">
                        Generate 2 unique SEO blog for your next viral video.
                    </p>
                    <div className="flex flex-col gap-y-1 w-full">
                        <label className="mt-2">Enter the Youtube Video link</label>
                        <input className="focus:outline-none text-black p-2 border  border-gray-200 border-solid rounded-lg" placeholder="https://youtu.be/" value={url} onChange={(e) => {
                            setUrl(e.target.value)
                        }} />
                        <label className="mt-4">Blog Tone/Mood</label>
                        <input className="focus:outline-none text-black p-2 border  border-gray-200 border-solid rounded-lg" placeholder="Funny, Educational, Inspirational" value={tone} onChange={(e) => {
                            setTone(e.target.value)
                        }} />
                    </div>
                    <button
                        style={{
                            backgroundColor: "#5072EA"
                        }}
                        onClick={onGenerate}
                        className="w-full flex flex-row justify-center items-center text-white p-2 rounded-lg">
                        Generate
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </button>
                </div>
            </div>
            <div className="px-20 pt-12 basis-5/12 min-h-screen bg-gray-100">
                <PostCards />
            </div>
        </div>
    )
}