import Image from "next/image";
import logo from "../../../public/logo.svg";
import "./Logo.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link className="logo__link" href={"/"}>
        <Image className="logo__image" src={logo} alt={"logo"} />
      </Link>
    </div>
  );
}
