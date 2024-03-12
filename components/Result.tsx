import { ResultCard } from "./ResultCard";

export const Results = ({
    params,
    searchParams
}: {
    params: {
        slug: string;
    },
    searchParams: any;
}) => {
    return (
        <div>
            <p>Results</p>
            <div className='grid grid-cols-2 gap-8 mt-4'>
                {fakeResults.map((result, index) => {
                    return (
                        <ResultCard key={index} answer={result} />
                    )
                })}
            </div>
        </div>
    )
}



const fakeResults = [
    {
        content: "lorem ipsum",
        tags: ["#video", "#viral", "#ideas"]
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, placeat minus architecto doloribus voluptate, in consequatur libero dignissimos, officia eaque vel provident? Voluptatem quisquam doloremque magnam facilis! Ad quod rem officiis numquam sint! Eaque, tempore fuga. Dolorum laboriosam a obcaecati totam perspiciatis, harum enim fugiat deleniti! Vero, laborum iste.",
        tags: ["#video", "#viral", "#ideas"]
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minus reprehenderit dignissimos excepturi pariatur veritatis blanditiis voluptatibus vitae accusamus quam?",
        tags: ["#video", "#viral", "#ideas"]
    }
]
