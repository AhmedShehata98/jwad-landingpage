"use client";
import { event } from "@/lib/fbPixel";
import { trackCustomEvent } from "@/lib/snapchatPixel";
import { trackEvent } from "@/lib/ticktokPixel";
import React, { AnchorHTMLAttributes } from "react";
import twc from "tw-classnames";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  snapchatPixelEventName: string;
  fbPixelEventName: string;
  fbPixelEventOptions?: object;
  snapchatEventOptions?: object;
  tiktokEventName: string;
  tiktokEventOptions?: object;
  children: React.ReactNode;
};
const AppAnchor = ({
  children,
  className,
  onClick,
  fbPixelEventName,
  snapchatPixelEventName,
  fbPixelEventOptions,
  snapchatEventOptions,
  tiktokEventName,
  tiktokEventOptions,
  ...rest
}: Props) => {
  const handleClick = (evt: React.MouseEvent<any>) => {
    if (onClick) {
      onClick(evt);
    }

    if (snapchatPixelEventName) {
      event({ name: snapchatPixelEventName, options: fbPixelEventOptions });
    }
    if (fbPixelEventName) {
      trackCustomEvent({
        eventName: fbPixelEventName,
        eventProperties: snapchatEventOptions,
      });
    }
    if (tiktokEventName) {
      trackEvent(tiktokEventName, tiktokEventOptions);
    }
  };

  return (
    <a {...rest} className={twc(className)} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AppAnchor;
