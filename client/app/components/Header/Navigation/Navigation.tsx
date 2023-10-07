'use client'

import Link from "next/link";
import "./Navigation.scss";
import { Button } from "../../Button";
import userIcon from "../../../../public/userIcon.svg";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Navigation() {
  const router = useRouter();

  const onSignUp = () => router.push('/signup');


  return (
    <div className="nav">
      <nav className="nav__menu">
        <Link href={"/marketplace"} className="nav__link">
          Marketplace
        </Link>
        <Link href={"/rankings"} className="nav__link">
          Rankings
        </Link>
        <Link href={"/wallet"} className="nav__link">
          Connect a wallet
        </Link>
      </nav>
      <Button handleClick={onSignUp} iconSrc={userIcon} iconAlt="user" iconHeight={20} iconWidth={20}>
        Sign Up
      </Button>
    </div>
  );
}
