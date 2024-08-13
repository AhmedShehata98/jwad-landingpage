import Image from "next/image";
import React from "react";
type Props = {
  service: {
    id: number;
    title: string;
    icon: string;
    video: string;
  };
};
const ServiceCard = ({ service }: Props) => {
  const handleHoverVideo = async (
    evt: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const target = evt.target as HTMLVideoElement;
    try {
      await target.play();
      console.log("play");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLeaveVideo = async (
    evt: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const target = evt.target as HTMLVideoElement;
    try {
      await target.pause();
      console.log("pause");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li
      key={service.id}
      className="w-[calc(25%-0.5rem)] bg-[#F7F7F7] rounded-lg"
    >
      <div className="px-4 pt-14 pb-4">
        <video
          width={262}
          height={203}
          className="w-full object-cover object-center"
          onMouseOver={handleHoverVideo}
          onMouseOut={handleLeaveVideo}
        >
          <source src={service.video} type="video/mp4" />
        </video>
      </div>
      <div className="flex items-center gap-2 px-4 gap-3">
        <div className="bg-[#EBEBEB] rounded-full size-12">
          <Image src={service.icon} alt="serv" width={48} height={48} />
        </div>
        <p className="text-xl font-semibold text-[#181818]">{service.title}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
