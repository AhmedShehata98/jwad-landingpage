import { getAllPartnersList, getPartnersSection } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";
import twc from "tw-classnames";

const Partners = async () => {
  const partnersSection = await getPartnersSection();
  const partnersList = await getAllPartnersList();

  return (
    <section className="w-full min-h-[70vh] bg-[#F7F7F7] ">
      <div className="app-container flex flex-col items-center justify-start">
        <h4 className="text-5xl leading-[72px] max-md:text-2xl font-bold text-center text-[#181818] mt-12">
          {partnersSection.data.attributes.heading}
        </h4>
        <ul className="w-full flex items-center justify-stretch flex-wrap gap-4 py-8">
          {partnersList.data?.map((partner, idx) => (
            <li
              className={twc(
                "bg-main flex items-center justify-center px-8 py-7 shadow-service-box",
                "w-[calc(50%-1rem)] h-[120px]",
                idx > partnersList.data.length - 4
                  ? "lg:flex-1"
                  : "lg:w-[calc(25%-0.75rem)]"
              )}
              key={partner.id}
            >
              <Image
                src={imagePrefixPath(
                  partner.attributes.icon.data.attributes.url
                )}
                alt={
                  partner.attributes.icon.data.attributes.alternativeText ||
                  `partner-${idx}`
                }
                width={192}
                height={48}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
