import AppAnchor from "@/components/AppAnchor";
import { getHeroSection } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import React from "react";

const Hero = async () => {
  const heroSection = await getHeroSection();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 z-[-1] w-full h-full object-cover object-center"
        autoPlay
        muted
        // @ts-ignore
        playsInline
        loop
      >
        <source
          src={imagePrefixPath(
            heroSection.data.attributes.video.data.attributes.url
          )}
          type="video/mp4"
        />
      </video>
      <span className="absolute inset-0 z-10 bg-black opacity-40 "></span>
      <div className="app-container absolute z-20 inset-0 py-20 flex flex-col items-start justify-start max-md:items-center gap-8 text-right max-md:text-center">
        <div className="w-full lg:w-3/4 xl:w-1/2 flex flex-col gap-4 text-center lg:text-start">
          <p className="text-[#FCFCFF] text-2xl font-semibold ">
            {heroSection.data.attributes.subheading}
          </p>
          <h2 className="font-semibold text-secondary text-5xl max-sm:text-[32px] max-sm:leading-[48px] leading-[72.6px] my-3">
            {heroSection.data.attributes.heading}
          </h2>
          <p className="text-[24px] text-[#FCFCFF] font-normal leading-9">
            {heroSection.data.attributes.description}
          </p>
          <p className="text-2xl max-sm:text-lg text-[#FCFCFF] font-semibold">
            {heroSection.data.attributes.secondDescription}
          </p>

          <AppAnchor
            href={heroSection.data.attributes.free_consultant?.[0].href}
            fbPixelEventName={
              heroSection.data.attributes.free_consultant?.[0].fb_event
            }
            snapchatPixelEventName={
              heroSection.data.attributes.free_consultant?.[0].snapchat_event
            }
            tiktokEventName={
              heroSection.data.attributes.free_consultant?.[0].tiktok_event
            }
            className="w-[403px] h-[52px] max-sm:w-full rounded-lg font-semibold leading-9 max-sm:text-lg bg-[#F7F7F7] border-4 border-[#494949c2] outline outline-[#F7F7F7] flex items-center justify-center hover:transition-all hover:rounded-full mb-8 mt-3 max-lg:mx-auto max-lg:w-3/4"
          >
            {heroSection.data.attributes.free_consultant?.[0].label}
          </AppAnchor>
        </div>
      </div>
    </section>
  );
};

export default Hero;
