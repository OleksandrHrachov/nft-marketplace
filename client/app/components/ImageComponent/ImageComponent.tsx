import Image from "next/image";
interface IProps {
  src: string;
  alt: string;
  imgClass?: string;
}

export default function ImageComponent({ src, alt, imgClass }: IProps) {
  return (
    <Image
      className={imgClass}
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
}
