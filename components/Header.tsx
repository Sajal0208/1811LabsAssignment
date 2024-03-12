import Logo from "./Logo";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Header({ user }: {
  user: any
}) {
  return (
    <div className="flex flex-row justify-between w-full px-20 py-12">
      <Logo />
      {
        user !== null ? <LogoutButton /> :
          <LoginButton />}
    </div>
  );
}

