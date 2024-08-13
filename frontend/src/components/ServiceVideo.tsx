"use client";

import React from "react";

const ServiceVideo = ({
  height,
  width,
  children,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
}) => {
  const handlePlay = async (
    evt: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const target = evt.target as HTMLVideoElement;
    await target.play();
  };
  const handlePause = async (
    evt: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const target = evt.target as HTMLVideoElement;
    await target.pause();
  };
  return (
    <video
      width={width}
      height={height}
      preload="metadata"
      onMouseOver={handlePlay}
      onMouseLeave={handlePause}
      className="w-full object-cover object-center aspect-[3/2]"
    >
      {children}
    </video>
  );
};

export default ServiceVideo;
