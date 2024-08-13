import React from "react";

function PortfolioSkeletonCard() {
  return (
    <li className="flex items-end max-sm:w-[calc(100%-1rem)] w-[calc(50%-1rem)] h-[500px] rounded-lg shadow-md p-4 bg-stone-800 animate-pulse">
      <span className="w-full flex items-start flex-col gap-4 justify-start">
        <span className="w-11/12 h-8 bg-stone-300 rounded-md animate-pulse"></span>
        <span className="w-4/6 h-6 bg-stone-400 rounded-md animate-pulse"></span>
      </span>
    </li>
  );
}

export default PortfolioSkeletonCard;
