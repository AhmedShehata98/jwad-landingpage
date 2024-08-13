"use client";
import { event } from "@/lib/fbPixel";
import { trackCustomEvent } from "@/lib/snapchatPixel";
import { trackEvent } from "@/lib/ticktokPixel";
import React, { HTMLAttributes } from "react";
import twc from "tw-classnames";

type Props = HTMLAttributes<HTMLButtonElement> & {
  snapchatPixelEventName: string;
  fbPixelEventName: string;
  fbPixelEventOptions?: object;
  snapchatEventOptions?: object;
  tiktokEventName: string;
  tiktokEventOptions?: object;
  children: React.ReactNode;
};

const AppButton = ({
  children,
  className,
  onClick,
  fbPixelEventName,
  fbPixelEventOptions,
  snapchatEventOptions,
  snapchatPixelEventName,
  tiktokEventName,
  tiktokEventOptions,
  ...rest
}: Props) => {
  const handleClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
    <button {...rest} className={twc("btn", className)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default AppButton;
