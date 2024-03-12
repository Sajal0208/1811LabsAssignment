import Image from 'next/image'
import mark from '../assets/Mark.svg'

export default function Logo() {
    return (
        <div className="flex flex-row gap-x-2 font-semibold items-center">
            <span>
                <Image src={mark} alt="logo" />
            </span>
            <span>
                Creatortools.ai
            </span>
        </div>
    )
}