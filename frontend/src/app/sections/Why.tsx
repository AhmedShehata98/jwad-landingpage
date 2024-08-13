import AppAnchor from "@/components/AppAnchor";
import WhyCard from "@/components/whyCard";
import { getWhyList, getWhySection } from "@/services/api";
import React from "react";

const Why = async () => {
  const whySection = await getWhySection();
  const whyCardItems = await getWhyList();

  return (
    <section className="w-full flex items-center justify-start flex-col min-h-screen bg-main">
      <h4
        className="w-3/5 max-sm:w-full max-sm:px-6 mt-20 font-bold text-5xl max-md:text-2xl leading-[72px] text-center bg-gradient-to-l from-[#156EFD] via-[#FF782A] to-[#7169E3]"
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {whySection.data.attributes.heading}
      </h4>
      <ul className="max-md:w-full max-md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
        {whyCardItems.data?.map((whyItem) => (
          <WhyCard key={whyItem.id} why={whyItem.attributes} />
        ))}
      </ul>
      <div className="w-full flex items-center justify-center my-20 max-md:px-6">
        <AppAnchor
          href={whySection.data.attributes.actionBtn?.[0].href}
          target="_blank"
          rel="noopener noreferrer"
          fbPixelEventName={whySection.data.attributes.actionBtn?.[0].fb_event}
          snapchatPixelEventName={
            whySection.data.attributes.actionBtn?.[0].snapchat_event
          }
          tiktokEventName={
            whySection.data.attributes.actionBtn?.[0].tiktok_event
          }
          className="btn w-[277px] max-md:w-full h-[54px] text-base font-semibold leading-[25px]"
        >
          {whySection.data.attributes.actionBtn?.[0].label}
        </AppAnchor>
      </div>
    </section>
  );
};

export default Why;
