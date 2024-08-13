import { getHeader } from "@/services/api";
import Image from "next/image";
import React from "react";

async function WhatsappBtn() {
  const header = await getHeader();

  return (
    <a
      href={header.data.attributes.contact_us[0].href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-30 bottom-10 left-6 shadow-2xl"
    >
      <Image
        src={"/icons/whatsapp.png"}
        alt="whatsapp.png"
        width={64}
        height={64}
      />
    </a>
  );
}

export default WhatsappBtn;
