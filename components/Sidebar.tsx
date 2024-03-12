"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SideBar = ({ active }: {
    active: string;
}) => {
    const router = useRouter();
    return (
        <div className={"max-w-[350px] pl-16 flex flex-col items-start justify-start"}>
            <p className='uppercase text-sm font-semibold text-gray-400 p-2'>All creator tools</p>
            {toolsData.map((tool, index) => {
                const keyword = tool.path.split('/')[1];
                return (
                    <span onClick={() => {
                        router.push(`/${tool.path}`)
                    }} key={index} className={`cursor-pointer flex flex-row text-sm gap-y-4 items-center ${active === keyword ? 'text-black font-medium' : 'text-gray-400'
                        }`}>
                        <span className="w-[25px] p-2 rounded-lg items-center flex flex-row justify-center">
                            {typeof tool.imageText === 'string' ? tool.imageText : <Image src={tool.imageText} alt="path" />}
                        </span>
                        {tool.title}
                    </span>
                )
            })}
        </div>
    )
}

const toolsData = [
    {
        title: "Video Idea Generator",
        imageText: '💡',
        path: 'tools/video-idea-generator'
    },
    {
        title: "Free Audiogram Generator",
        imageText: '🖼️',
        path: 'tools/audiogram-generator'
    },
    {
        title: "YT video to SEO Blog",
        imageText: '🗒️',
        path: 'tools/youtube-video-to-seo-blog-generator'
    },
    {
        title: "YT video to LinkedIn Post",
        imageText: '🗒️',
        path: 'tools/youtube-video-to-linkedin-post-generator'
    }
]

