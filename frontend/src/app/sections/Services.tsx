import ServiceVideo from "@/components/ServiceVideo";
import { getServicesList, getServicesSection } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";

const Services = async () => {
  const servicesSection = await getServicesSection();
  const servicesList = await getServicesList();

  return (
    <section className="w-full min-h-screen bg-main py-20">
      <div className="app-container flex items-center justify-start flex-col">
        <h4 className="w-3/5 mt-20 font-bold text-5xl leading-[72px] text-center max-md:text-2xl text-[#181818]">
          {servicesSection.data.attributes.heading}
        </h4>
        <ul className="flex items-center justify-center flex-wrap gap-3">
          {servicesList.data?.map((service) => {
            return (
              <li
                key={service.id}
                className="w-[calc(100%-0.5rem)] md:w-[calc(50%-0.5rem)] lg:w-[calc(33.3%-0.5rem)] bg-[#F7F7F7] rounded-lg"
              >
                <div className="px-4 pt-14 pb-4">
                  <ServiceVideo width={262} height={203}>
                    <source
                      src={imagePrefixPath(
                        service.attributes.video.data?.attributes.url
                      )}
                      type={"video/mp4"}
                    />

                    <source
                      src={imagePrefixPath(
                        service.attributes.video.data?.attributes.url
                      )}
                      type="video/mp4"
                    />
                  </ServiceVideo>
                </div>
                <div className="flex items-center px-4 gap-3">
                  <div className="bg-[#EBEBEB] rounded-full size-12">
                    <Image
                      src={imagePrefixPath(
                        service.attributes.icon.data.attributes.url
                      )}
                      alt={
                        service.attributes.icon.data.attributes
                          .alternativeText || "serv"
                      }
                      width={48}
                      height={48}
                    />
                  </div>
                  <p className="text-xl font-semibold text-[#181818]">
                    {service.attributes.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
