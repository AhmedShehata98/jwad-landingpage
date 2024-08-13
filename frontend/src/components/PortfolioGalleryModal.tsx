import { IStrapiImage } from "@/types/strapi";
import { imagePrefixPath } from "@/utils/image-path";
import React, { useMemo } from "react";
import { TfiClose } from "react-icons/tfi";
import ImageGallery from "react-image-gallery";

type Props = {
  images: IStrapiImage[];
  title: string;
  onClose: () => void;
};

const PortfolioGalleryModal = ({ images, title, onClose }: Props) => {
  const imagesGallery = useMemo(
    () =>
      images?.map((image) => ({
        original: imagePrefixPath(image.attributes.url),
        thumbnail: imagePrefixPath(image.attributes.url),
      })),
    [images]
  );

  return (
    <section className="fixed top-0 left-0 inset-0 z-50 flex items-center justify-center bg-stone-500 bg-opacity-60">
      <div className="w-[95%] p-3 bg-neutral-800 h-[95vh] overflow-hidden rounded-lg">
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
        <div className="w-full h-[90%] max-h-full flex items-start justify-center overflow-y-auto p-4">
          <ImageGallery items={imagesGallery} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioGalleryModal;
