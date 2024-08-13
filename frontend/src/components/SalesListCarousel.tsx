"use client";
import { SalesCardResponseType } from "@/services/api";
import { IStrapiData } from "@/types/strapi";
import React from "react";
import SalesCard from "./SalesCard";
import EmblaCarousel from "./EmblaCarousel";

type Props = {
  dataList: IStrapiData<SalesCardResponseType>[];
};
function SalesListCarousel({ dataList }: Props) {
  return (
    <EmblaCarousel options={{ direction: "rtl" }}>
      {dataList?.map((item) => {
        return (
          <SalesCard
            key={item.id}
            data={item.attributes.sales_card[0]}
            active={false}
            className="sales-embla__slide"
          />
        );
      })}
    </EmblaCarousel>
  );
}

export default React.memo(SalesListCarousel);
