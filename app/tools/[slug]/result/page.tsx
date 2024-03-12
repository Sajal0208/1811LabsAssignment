"use client"
import Header from '@/components/Header';
import { Results } from '@/components/Result';
import { SideBar } from '@/components/Sidebar';
import { useSearchParams } from 'next/navigation'

export default function ResultsPage({ params }: {
    params: {
        slug: string;
    }
}) {
    console.log(params.slug);
    const searchParams = useSearchParams();
    console.log(searchParams);
    return (
        <div className='flex flex-col w-full'>
            <Header />
            <div className='flex flex-row'>
                <div className='basis-3/12'>
                    <SideBar active={params.slug} />
                </div>
                <div className='basis-9/12'>
                    <Results params={params} searchParams={searchParams} />
                </div>
            </div>
        </div>
    )
}

