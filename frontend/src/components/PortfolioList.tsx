"use client";
import {
  getPortfolioFilters,
  getPortfolioList,
  PortfolioCardType,
  PortfolioListType,
} from "@/services/api";
import React, { useCallback, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Modal from "./Modal";
import useSWR from "swr";
import { swrKeys } from "@/swr/keys";
import twc from "tw-classnames";
import PortfolioGalleryCard from "./PortfolioGalleryCard";
import PortfolioGalleryModal from "./PortfolioGalleryModal";
import PortfolioVideoModal from "./PortfolioVideoModal";
import PortfolioSkeletonCard from "./PortfolioSkeletonCard";
import { IStrapiData, IStrapiResponse } from "@/types/strapi";

const initialPaginationValues = {
  offset: 1,
  limit: 3,
};

const useInfinitePortfolioQuery = ({
  paginationLimit,
  paginationOffset,
  selectedFilter,
}: {
  selectedFilter: string;
  paginationOffset: number;
  paginationLimit: number;
}) => {
  const [infiniteData, setInfiniteData] = useState<
    IStrapiData<PortfolioListType>[]
  >([]);
  const handleResetData = () => {
    setInfiniteData([]);
  };

  const { data: portfolioList, isLoading: isLoadingPortfolioList } = useSWR(
    [swrKeys.portfolioList, selectedFilter, paginationOffset, paginationLimit],
    () =>
      getPortfolioList({
        query: selectedFilter,
        offset: paginationOffset,
        limit: paginationLimit,
      }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setInfiniteData((prev) => [...prev, ...data.data]);
      },
    }
  );

  return {
    data: infiniteData,
    meta: portfolioList?.meta,
    isLoadingPortfolioList,
    handleResetData,
  };
};

const PortfolioList = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [paginationOffset, setPaginationOffset] = useState(
    initialPaginationValues.offset
  );
  const [paginationLimit, setPaginationLimit] = useState(
    initialPaginationValues.limit
  );
  const { data, isLoadingPortfolioList, meta, handleResetData } =
    useInfinitePortfolioQuery({
      paginationLimit,
      paginationOffset,
      selectedFilter,
    });
  // const { data: portfolioList, isLoading: isLoadingPortfolioList } = useSWR(
  //   [swrKeys.portfolioList, selectedFilter, paginationOffset, paginationLimit],
  //   () =>
  //     getPortfolioList({
  //       query: selectedFilter,
  //       offset: paginationOffset,
  //       limit: paginationLimit,
  //     }),
  //   {
  //     keepPreviousData: true,
  //   }
  // );
  const { data: portfolioFilters, isLoading: isLoadingPortfolioFilters } =
    useSWR(swrKeys.portfolioFilter, () => getPortfolioFilters());

  const [showGalleyModal, setShowGalleyModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] =
    useState<PortfolioCardType | null>(null);
  const handlePreviewGalley = (
    _evt: React.MouseEvent<HTMLElement, MouseEvent>,
    data: PortfolioCardType
  ) => {
    setShowGalleyModal(true);
    setSelectedPortfolioItem(data);
  };

  const handlePreviewVideo = (
    _evt: React.MouseEvent<HTMLElement, MouseEvent>,
    data: PortfolioCardType
  ) => {
    console.log(data);
    setShowVideoModal(true);
    setSelectedPortfolioItem(data);
    console.log(showVideoModal);
  };

  const handleChangeFilter = (filter: string) => {
    setSelectedFilter(filter);
    setPaginationOffset(initialPaginationValues.offset);
    setPaginationLimit(initialPaginationValues.limit);
  };

  const handleSeeMore = useCallback(() => {
    if (meta) {
      if (paginationOffset >= meta.pagination.total) return;
    }
    setPaginationOffset((o) => (o += 1));
  }, [meta]);

  return (
    <>
      <nav
        dir="ltr"
        className="w-full min-[992px]:w-fit h-[66px] overflow-x-auto flex items-center justify-center gap-2 max-md:px-3 bg-[#FCFCFF] py-2 px-4 rounded-full mb-12"
      >
        {isLoadingPortfolioFilters && (
          <>
            <li className="h-full w-32 inline-block rounded-full bg-gray-300 animate-pulse"></li>
            <li className="h-full w-20 inline-block rounded-full bg-gray-300 animate-pulse"></li>
            <li className="h-full w-32 inline-block rounded-full bg-gray-400 animate-pulse"></li>
            <li className="h-full w-36 inline-block rounded-full bg-gray-300 animate-pulse"></li>
          </>
        )}
        {portfolioFilters?.data?.map((filter, idx) => {
          const activeFilter = filter.attributes.filter === selectedFilter;

          return (
            <button
              type="button"
              className={twc(
                "relative z-10 h-[50px] w-fit px-3 py-[6px] rounded-3xl capitalize shrink-0 transition-colors after:absolute after:inset-0 after:z-[-1] after:bg-primary after:-translate-y-full after:duration-500 after:scale-90 after:transition-transform overflow-hidden",
                {
                  "after:translate-y-0 text-[#FCFCFF] after:scale-100":
                    activeFilter,
                }
              )}
              key={filter.id}
              title={filter.attributes.filter}
              onClick={() => handleChangeFilter(filter.attributes.filter)}
            >
              {filter.attributes.label}
            </button>
          );
        })}
      </nav>
      <ul className="w-full flex flex-wrap items-center justify-center gap-4 px-8">
        {isLoadingPortfolioList && (
          <>
            <PortfolioSkeletonCard />
            <PortfolioSkeletonCard />
            <PortfolioSkeletonCard />
            <PortfolioSkeletonCard />
          </>
        )}
        {!isLoadingPortfolioList &&
          data?.map((portfolio) => {
            if (portfolio.attributes.our_work_fiiter.data == null) return null;

            if (
              portfolio.attributes.our_work_fiiter.data.attributes.filter.toLowerCase() ===
                "graphic-design" ||
              portfolio.attributes.our_work_fiiter.data.attributes.filter.toLowerCase() ===
                "branding"
            ) {
              return (
                <PortfolioGalleryCard
                  key={portfolio.id}
                  portfolio={portfolio.attributes}
                  onClickPortfolio={handlePreviewGalley}
                />
              );
            }
            if (
              portfolio.attributes.our_work_fiiter.data.attributes.filter.toLowerCase() ===
              "video-design"
            ) {
              return (
                <PortfolioCard
                  key={portfolio.id}
                  portfolio={portfolio.attributes}
                  onClickPortfolio={handlePreviewVideo}
                />
              );
            }
            if (
              portfolio.attributes.our_work_fiiter.data.attributes.filter.toLowerCase() ===
              "web-design"
            ) {
              return (
                <PortfolioCard
                  key={portfolio.id}
                  portfolio={portfolio.attributes}
                  onClickPortfolio={() => {}}
                />
              );
            }
          })}
      </ul>
      <div className="w-full flex items-center justify-center mt-8">
        <button
          type="button"
          className={twc(
            "px-4 py-2 btn border-[#181818]",
            meta?.pagination.pageCount === paginationOffset && "!hidden"
          )}
          onClick={handleSeeMore}
        >
          اظهار المزيد
        </button>
      </div>
      {showVideoModal && (
        <Modal>
          <PortfolioVideoModal
            video={selectedPortfolioItem?.video?.data!}
            title={selectedPortfolioItem?.tile as string}
            onClose={() => setShowVideoModal(false)}
          />
        </Modal>
      )}
      {showGalleyModal && (
        <Modal>
          <PortfolioGalleryModal
            images={selectedPortfolioItem?.media_item.data!}
            title={selectedPortfolioItem?.tile as string}
            onClose={() => setShowGalleyModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default PortfolioList;
