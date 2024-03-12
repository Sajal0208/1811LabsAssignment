import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import star from "../assets/star_vector.svg"
import Image from "next/image";
import starBadge from "../assets/star.svg"
import heartBadge from "../assets/heart.svg"
import plusoneBadge from "../assets/plusone.svg"
import thumbsupBadge from "../assets/thumbsup.svg"
import pathIcon from "../assets/path.svg"
import linkedin from "../assets/linkedin.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";


export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Header />
      <div className="flex flex-col items-center gap-y-16">
        <MainBody />
        <ToolsSection />
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <div className="flex flex-col gap-8 items-center">

      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold">Experiments</h2>
        <p className="text-lg text-center">
          A collection of experiments and projects by 1811Labs.
        </p>
      </div>
    </div>
  );
}

const Badge = () => {
  return (
    <div className="flex flex-row gap-x-1 border px-1 border-gray-200 border-solid rounded-full">
      <Image src={star} alt="star" />
      <span>All the top creator tools in one place</span>
      <Image src={star} alt="star" />
    </div>
  )
}

const MainBody = () => {
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
      <button className="bg-pink-500 text-white p-3 rounded-lg flex flex-row gap-x-1 justify-center items-center">
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

const ToolCard = ({ tool }: {
  tool: {
    title: string,
    description: string,
    imageText: any
  },
}) => {
  return (
    <div className={'hover:border-gray-300 cursor-pointer rounded-lg max-w-[600px] flex flex-col gap-y-2 p-4 border border-solid border-gray-100'}>
      <span className="w-[45px] p-2 rounded-lg border border-solid border-gray-100 items-center flex flex-row justify-center">
        {typeof tool.imageText === 'string' ? tool.imageText : <Image src={tool.imageText} alt="path" />}
      </span>
      <h2 className="text-xl font-semibold">{tool.title}</h2>
      <p>{tool.description}</p>
    </div>
  )
}

const ToolsSection = () => {
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

