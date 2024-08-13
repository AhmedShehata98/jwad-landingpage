"use client";
import { PortfolioCardType } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

type Props = {
  portfolio: PortfolioCardType;
  onClickPortfolio?: (
    evt: React.MouseEvent<HTMLElement, MouseEvent>,
    data: PortfolioCardType
  ) => void;
};
const PortfolioCard = ({ portfolio, onClickPortfolio }: Props) => {
  return (
    <li className="max-sm:w-[calc(100%-1rem)] w-[calc(50%-1rem)] relative rounded-xl border border-[#4F5057] bg-[#2A2A2A] p-4 overflow-hidden aspect-[19/15]">
      <div className="size-full rounded-xl overflow-hidden">
        {portfolio?.media_item.data?.map((media, idx) => (
          <figure
            key={media.id}
            className="size-full relative after:absolute after:inset-0 after:bg-[#2A2A2A] cursor-pointer after:bg-opacity-20 group rounded-xl"
            onClick={(evt) => onClickPortfolio?.(evt, portfolio)}
          >
            <Image
              src={imagePrefixPath(media.attributes.url)}
              className="size-full transition-transform group-hover:scale-125 group-hover:rotate-12 object-cover object-center"
              width={400}
              height={400}
              alt={media.attributes.alternativeText || `portfolio-${idx}`}
            />
            {portfolio.video.data && (
              <span className="text-[6rem] text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <IoPlayCircleOutline />
              </span>
            )}
          </figure>
        ))}
      </div>

      <div className="absolute left-0 bottom-0 w-full h-[188px] px-5 py-3 flex flex-col justify-end bg-gradient-to-t from-[#000000] via-[#131313d0]">
        <h5 className="text-2xl font-bold leading-10 text-right text-[#F7F7F7]">
          {portfolio.tile}
        </h5>
        <p className="font-normal text-sm leading-6 text-[#B6B7C2]">
          {portfolio.description}
        </p>
      </div>
    </li>
  );
};

export default PortfolioCard;
