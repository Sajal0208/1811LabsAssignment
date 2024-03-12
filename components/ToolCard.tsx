import Image from "next/image"

export const ToolCard = ({ tool }: {
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
