"use client";

import { PortfolioCardType } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";
import twc from "tw-classnames";

type Props = {
  portfolio: PortfolioCardType;
  onClickPortfolio?: (
    evt: React.MouseEvent<HTMLElement, MouseEvent>,
    data: PortfolioCardType
  ) => void;
};
function PortfolioGalleryCard({ portfolio, onClickPortfolio }: Props) {
  let imageWidth = 100;
  let imagesLength = portfolio?.media_item.data?.length || 0;

  if (imagesLength >= 2) {
    imageWidth = 50;
  } else if (imagesLength >= 3) {
    imageWidth = 33.33;
  } else {
    imageWidth = 100;
  }

  return (
    <li className="max-sm:w-[calc(100%-1rem)] w-[calc(50%-1rem)] relative rounded-xl border border-[#4F5057] bg-[#2A2A2A] p-4 overflow-hidden aspect-[19/15]">
      <ul className="size-full flex flex-wrap items-center justify-center gap-3 rounded-xl overflow-hidden">
        {portfolio?.media_item.data?.slice(0, 3).map((media, idx) => (
          <figure
            key={media.id}
            className={twc(
              "relative after:absolute after:inset-0 after:bg-[#2A2A2A] cursor-pointer after:bg-opacity-20 group rounded-xl aspect-square overflow-hidden"
            )}
            style={{
              width: `calc(${imageWidth}% - 0.75rem)`,
              minWidth: `calc(${imageWidth}% - 0.75rem)`,
            }}
            onClick={(evt) => onClickPortfolio?.(evt, portfolio)}
          >
            <Image
              src={imagePrefixPath(media.attributes.url)}
              className="size-full transition-transform group-hover:scale-125 group-hover:rotate-12 object-cover object-center"
              width={300}
              height={300}
              alt={media.attributes.alternativeText || `portfolio-${idx}`}
            />
          </figure>
        ))}
        <div className="flex-1 aspect-square flex items-center justify-center rounded-xl bg-[#363636]">
          <p className="px-6 py-5 bg-secondary rounded-full shadow-2xl truncate text-xl font-semibold">
            +{imagesLength - 3}
          </p>
        </div>
      </ul>

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
}

export default PortfolioGalleryCard;
