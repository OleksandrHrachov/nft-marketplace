"use client";

import { Button } from "@/app/components/Button";
import copyIcon from "../../../../../public/copyIcon.svg";
import "./ButtonsGroup.scss";

interface IProps {
  creatortId: string;
}

export default function ButtonsGroup({ creatortId }: IProps) {
  const copyText = () => {
    navigator.clipboard.writeText(`${location.origin}/creator/${creatortId}`);
  };

  const copyBtnTitle = () => {
    if (creatortId.length > 10) {
      return `${creatortId.slice(0, 5)}...${creatortId.slice(-4)}`;
    } else {
      return creatortId;
    }
  };

  return (
    <div className="buttons-group">
      <div className="buttons-group__copy">
        <Button
          buttonClass="buttons-group__copy-button"
          iconSrc={copyIcon}
          handleClick={() => copyText()}
        >
          {copyBtnTitle()}
        </Button>
      </div>
      <div className="buttons-group__follow">
        <Button variant="outline">Follow</Button>
      </div>
    </div>
  );
}
