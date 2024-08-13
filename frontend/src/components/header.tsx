import { getHeader } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";
import React from "react";
import AppAnchor from "./AppAnchor";

const Header = async () => {
  const header = await getHeader();

  return (
    <header className="h-[104px] w-full flex items-center justify-center">
      <div className="app-container flex items-center justify-between">
        <Image
          src={imagePrefixPath(header.data.attributes.logo.data.attributes.url)}
          width={132.8}
          height={56}
          alt={
            header.data.attributes.logo.data.attributes.alternativeText ||
            "logo.svg"
          }
        />
        <AppAnchor
          href={header.data.attributes.contact_us?.[0].href}
          className={`btn w-[135px] h-[54px]`}
          snapchatPixelEventName={
            header.data.attributes.contact_us?.[0].snapchat_event
          }
          fbPixelEventName={header.data.attributes.contact_us?.[0].fb_event}
          tiktokEventName={header.data.attributes.contact_us?.[0].tiktok_event}
        >
          <p className="font-semibold text-base text-right leading-[25px]">
            {header.data.attributes.contact_us?.[0].label}
          </p>
          <Image
            src={imagePrefixPath(
              header.data.attributes.contact_us?.[0].icon.data?.[0].attributes
                .url
            )}
            width={24}
            height={24}
            alt={
              header.data.attributes.contact_us?.[0].icon.data?.[0].attributes
                .alternativeText || "call.svg"
            }
          />
        </AppAnchor>
      </div>
    </header>
  );
};

export default Header;
