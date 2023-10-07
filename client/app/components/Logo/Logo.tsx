import { ImageComponent } from "../ImageComponent";
import logo from "../../../public/logo.svg";
import "./Logo.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href={"/"}>
        <ImageComponent src={logo} alt={"logo"} />
      </Link>
    </div>
  );
}
