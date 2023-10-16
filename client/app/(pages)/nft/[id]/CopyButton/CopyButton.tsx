"use client";

import { Button } from "@/app/components/Button";
import copyIcon from "../../../../../public/copyIcon.svg";
import "./CopyButton.scss";
import { PageLinks } from "@/app/utils/endpoint";

interface IProps {
  assetId: string;
}

export default function CopyButton({ assetId }: IProps) {
  const copyText = () => {
    navigator.clipboard.writeText(
      `${location.origin}${PageLinks.NFT}/${assetId}`
    );
  };

  const copyBtnTitle = () => {
    if (assetId.length > 10) {
      return `${assetId.slice(0, 5)}...${assetId.slice(-4)}`;
    } else {
      return assetId;
    }
  };

  return (
    <div className="button__copy">
      <Button
        buttonClass="button__copy-button"
        iconSrc={copyIcon}
        handleClick={() => copyText()}
      >
        {copyBtnTitle()}
      </Button>
    </div>
  );
}
