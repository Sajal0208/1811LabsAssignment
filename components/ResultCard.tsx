import Image from "next/image";
import linkedin from '../assets/linkedin.svg'

export const ResultCard = ({
    answer
}: {
    answer: {
        content: string;
        tags: string[];
    }
}) => {
    return (
        <div className={'border border-solid border-gray-100 rounded-lg h-[300px] p-4 flex flex-col justify-between'}>
            <div className='flex flex-col gap-y-2'>
                <Image src={linkedin} alt='image' />
                <h1 className="font-semibold text-3xl">UX review presentations</h1>
                <p className='text-gray-500 text-sm mt-2'>{answer.content}</p>
            </div>
            <div className='flex flex-row gap-2'>
                {answer.tags.map((tag, index) => {
                    return (
                        <span key={index} className=' cursor-pointer bg-blue-200 px-2 py-1 rounded-xl flex flex-row justify-center items-center text-gray-400 text-xs'>{tag}</span>
                    )
                })}
            </div>
        </div>
    )
}

