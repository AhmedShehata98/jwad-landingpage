import AppAnchor from "@/components/AppAnchor";
import { getConsultation } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";

const Consultation = async () => {
  const consultationSection = await getConsultation();

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center py-16"
      style={{
        backgroundImage: "url(/images/9009673f2117770de22b75ef227438f8.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="app-container flex items-center justify-center gap-8 max-lg:flex-col-reverse">
        <div className="flex flex-col items-start max-md:items-center justify-center w-1/2 max-lg:w-full">
          <p className="font-normal text-sm leading-6 text-[#4F5057] max-md:text-center">
            {consultationSection.data.attributes.subheading}
          </p>
          <p className="font-semibold text-2xl leading-9 text-right max-md:text-center">
            {consultationSection.data.attributes.heading}
          </p>
          <AppAnchor
            href={consultationSection.data.attributes.link?.[0].href}
            rel="noopener noreferrer"
            target="_blank"
            fbPixelEventName={
              consultationSection.data.attributes.link?.[0].fb_event
            }
            snapchatPixelEventName={
              consultationSection.data.attributes.link?.[0].snapchat_event
            }
            tiktokEventName={
              consultationSection.data.attributes.link?.[0].tiktok_event
            }
            className="btn max-md:w-full w-[400px] h-[52px] mt-4 font-semibold text-xl leading-9 max-md:text-center"
          >
            {consultationSection.data.attributes.link?.[0].label}
          </AppAnchor>
        </div>
        <div className="flex items-center justify-center w-1/2 max-lg:w-full">
          <div className="w-[75%] flex items-center justify-center aspect-square rounded-full border-4 border-[#ffdde0]">
            <div className="relative w-[calc(100%-1rem)] aspect-square bg-[#ffdde0] rounded-full">
              <Image
                src={imagePrefixPath(
                  consultationSection.data.attributes.image.data.attributes.url
                )}
                alt={
                  consultationSection.data.attributes.image.data.attributes
                    .alternativeText
                }
                width={500}
                height={500}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-full rounded-b-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
