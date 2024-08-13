import { WhyCardType } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";

type Props = {
  why: WhyCardType;
};
const WhyCard = ({ why }: Props) => {
  return (
    <li
      className={`flex flex-col relative border bg-main border-[#EBEBEB] p-14 hover:shadow-service-box ${
        why.isActive ? "shadow-service-box" : ""
      }`}
      // style={{
      //   clipPath: "polygon(0 1%, 100% 0, 100% 56%, 57% 100%, 0 100%, 0% 50%)",
      // }}
    >
      <Image
        src={imagePrefixPath(why.icon.data.attributes.url)}
        alt={why.icon.data.attributes.alternativeText}
        width={48}
        height={48}
        className="absolute -top-6"
      />
      <p className="font-semibold text-base leading-[25px] text-right text-[#181818]">
        {why.title}
      </p>
      <small className="font-normal text-sm text-right text-[#4F5057]">
        {why.description}
      </small>
    </li>
  );
};

export default WhyCard;
