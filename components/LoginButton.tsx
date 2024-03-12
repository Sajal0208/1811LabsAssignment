"use client"
import Image from "next/image";
import avatar from "../assets/user.svg";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
    const router = useRouter()
    return (
        <button style={{
            borderWidth: 1,
        }} className="flex flex-row items-center gap-x-2 border-solid border-gray-300 rounded-lg p-1 font-medium">
            <Image src={avatar} alt="avatar" />
            <span onClick={() => {
                router.push('/login')
            }}>Log in</span>
        </button>
    )
}
