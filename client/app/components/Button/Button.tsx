import Image from "next/image";
import "./Button.scss";

interface IProps {
  children: React.ReactNode;
  variant?: "primary";
  handleClick?: () => void;
  iconSrc?: string;
  iconAlt?: string
  iconWidth?: number;
  iconHeight?: number;
}

export default function Button({
  children,
  variant = "primary",
  handleClick,
  iconSrc,
  iconAlt = 'icon',
  iconWidth = 20,
  iconHeight = 20

}: IProps) {
  return (
    <button
      className={`button button--${variant}`}
      type="button"
      onClick={handleClick}
    >
      {iconSrc && <Image className="button__icon" src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} />}
      {children}
    </button>
  );
}
