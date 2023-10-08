
import Image from "next/image";
import Link from "next/link";
import "./CustomLink.scss";

interface IProps {
  children: React.ReactNode;
  variant?: "primary" | 'outline';
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  href: string;
  customClassName?: string;
}

export default function CustomLink({
  children,
  variant = "primary",
  iconSrc,
  iconAlt = "icon",
  iconWidth = 20,
  iconHeight = 20,
  href,
  customClassName = ''
}: IProps) {
  return (
    <Link
      href={href}
      className={`link link--${variant}`}
    >
      {iconSrc && (
        <Image
          className={`link__icon ${customClassName}`}
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </Link>
  );
}
