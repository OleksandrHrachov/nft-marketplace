'use client'
import Image from "next/image";
import "./Button.scss";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  variant?: "primary";
  handleClick?: () => void;
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  handleClick,
  iconSrc,
  iconAlt = "icon",
  iconWidth = 20,
  iconHeight = 20,
  href,
}: IProps) {
  return href ? (
    <Link
      href={href}
      className={`button button--${variant}`}
      onClick={() => handleClick && handleClick()}
    >
      {iconSrc && (
        <Image
          className="button__icon"
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </Link>
  ) : (
    <button
      className={`button button--${variant}`}
      type="button"
      onClick={() => handleClick && handleClick()}
    >
      {iconSrc && (
        <Image
          className="button__icon"
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </button>
  );
}
