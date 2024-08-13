import { IStrapiImage } from "@/types/strapi";
import { imagePrefixPath } from "@/utils/image-path";
import React from "react";
import { TfiClose } from "react-icons/tfi";

type Props = {
  video: IStrapiImage;
  title: string;
  onClose: () => void;
};

function PortfolioVideoModal({ onClose, title, video }: Props) {
  return (
    <section className="fixed top-0 left-0 inset-0 z-50 flex items-center justify-center bg-stone-500 bg-opacity-60 max-md:p-6">
      <div className="w-full md:w-3/4 lg:w-2/3 p-3 bg-neutral-800 h-[95vh] overflow-hidden rounded-lg">
        <span className="w-full flex items-center justify-start border-b border-stone-500 gap-2 py-2.5 mb-5">
          <button
            type="button"
            className="bg-red-400 p-3 aspect-square text-slate-950 hover:bg-red-500"
            onClick={onClose}
          >
            <TfiClose />
          </button>
          <h5 className="font-semibold capitalize text-white text-lg px-4 mx-auto">
            {title}
          </h5>
        </span>
        <div className="w-full max-h-full flex items-start justify-center overflow-y-auto p-4">
          <video className="w-full rounded-xl" controls muted>
            <source
              src={imagePrefixPath(video.attributes.url)}
              type={`video/${video.attributes.url?.slice(-3)}`}
            />
          </video>
        </div>
      </div>
    </section>
  );
}

export default PortfolioVideoModal;
