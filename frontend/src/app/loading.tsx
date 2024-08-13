import { getLogo } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";

const Loading = async () => {
  const logoResponse = await getLogo();
  return (
    <section className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center bg-[#F7F7F7]">
      <div className="size-24 flex items-center justify-center gap-3 flex-col">
        <Image
          src={imagePrefixPath(
            logoResponse.data.attributes.logo.data.attributes.url
          )}
          width={340}
          height={340}
          alt={
            logoResponse.data.attributes.logo.data.attributes.alternativeText
          }
        />
        <div className="size-10 border-2 border-transparent border-t-secondary animate-spin rounded-full"></div>
      </div>
    </section>
  );
};

export default Loading;
