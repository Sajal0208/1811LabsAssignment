import Image from "next/image"
import pathIcon from "../assets/path.svg"
import linkedin from "../assets/linkedin.svg"
import { ToolCard } from "./ToolCard"

const toolsData = [
    {
        title: "Video Idea Generator",
        description: "Generate 10 unique ideas for your next viral video. Forget the creative block",
        imageText: '💡',
    }, {
        title: "Free Audiogram Generator",
        description: "Generate 10 unique ideas for your next viral video. Forget the creative block",
        imageText: '🖼️',
    }, {
        title: "YouTube video to SEO Blog Generator",
        description: "Generate 10 unique ideas for your next viral video. Forget the creative block",
        imageText: '🗒️',
    }, {
        title: "YouTube video to LinkedIn Post Generator",
        description: "Generate 10 unique ideas for your next viral video. Forget the creative block",
        imageText: linkedin,
    }
]

export const ToolsSection = () => {
    return (
        <div className="relative flex flex-col gap-y-4 items-center w-full">
            <p className="text-pink-500">All of our tools</p>
            <h1 className="text-2xl">
                Click on any tool below and explore
            </h1>
            <Image src={pathIcon} alt="path" />
            <div className={"grid grid-cols-2 gap-4"}>
                {toolsData.map((tool, index) => {
                    return (
                        <ToolCard key={index} tool={tool} />
                    )
                })}
            </div>
            <div style={{
                backgroundColor: '#FFFAFB'
            }} className="p-10 flex flex-row items-center justify-between  border border-solid border-gray-100 rounded-lg mt-10 w-full">
                <div className="flex flex-col max-w-[300px] gap-y-2">
                    <p className="text-2xl font-semibold">Want to know more about the tools?</p>
                    <p className="text-sm text-gray-400">Join the club and explore all the free tools...</p>
                </div>
                <div className="">
                    <button className="px-12 py-2 bg-pink-400 text-white rounded-md">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
