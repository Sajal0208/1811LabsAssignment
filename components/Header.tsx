import Image from "next/image";
import Logo from "./Logo";
import avatar from "../assets/user.svg";

const LoginButton = () => {
  return (
    <button style={{
      borderWidth: 1,
    }} className="flex flex-row items-center gap-x-2 border-solid border-gray-300 rounded-lg p-1 font-medium">
      <Image src={avatar} alt="avatar" />
      <span>Log in</span>
    </button>
  )
}

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full px-24 py-12">
      <Logo />
      <LoginButton />
    </div>
  );
}
