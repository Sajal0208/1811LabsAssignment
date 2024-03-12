import Logo from "./Logo";
import { AuthButton } from "./AuthButton";
import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full px-20 py-12">
      <Logo />
      <AuthButton />
    </div>
  );
}

