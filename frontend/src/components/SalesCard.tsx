import { SalesCardType } from "@/services/api";
import { HTMLAttributes } from "react";
import { BsCashCoin } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineStorefront } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import twc from "tw-classnames";

type Props = HTMLAttributes<HTMLDivElement> & {
  data: SalesCardType;
  active: boolean;
};
const SalesCard = async ({ active, data, className, ...rest }: Props) => {
  return (
    <div
      className={twc(
        "flex items-center justify-center flex-col gap-6 shadow-service-box p-6 max-md:p-4 rounded-xl bg-[#FCFCFF]",
        active && "scale-105 -translate-y-4",
        className
      )}
      {...rest}
    >
      <div className="w-full flex items-center justify-between max-sm:flex-col gap-12 max-sm:gap-1">
        <p className="max-sm:text-[14px] text-xl font-normal text-[#4F5057]">
          {data.monthSummaryLabel}
        </p>
        <p className="max-sm:text-[14px] text-xl font-normal text-[#4F5057]">
          {data.month}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-3 flex items-center justify-start gap-2.5">
          <span
            className={twc(
              "max-sm:size-8 size-14 shrink-0 aspect-square flex items-center text-3xl  max-sm:text-xl justify-center bg-[#EBEBEB] rounded-full",
              active && "bg-secondary text-white"
            )}
          >
            <LuUsers2 />
          </span>
          <span>
            <p
              className={twc(
                "max-sm:text-base text-2xl text-primary font-semibold",
                !active && "text-[#181818]"
              )}
            >
              {data.visitsCount}
            </p>
            <p className="max-sm:text-[14px] text-xl font-normal text-[#4F5057]">
              {data.visitsLabel}
            </p>
          </span>
        </div>
        <div className="mb-3 flex items-center justify-start gap-2.5">
          <span
            className={twc(
              "max-sm:size-8 size-14 shrink-0 aspect-square flex items-center text-3xl  max-sm:text-xl justify-center bg-[#EBEBEB] rounded-full",
              active && "bg-secondary text-white"
            )}
          >
            <BsCashCoin />
          </span>
          <span>
            <p
              className={twc(
                "max-sm:text-base text-2xl text-primary font-semibold",
                !active && "text-[#181818]"
              )}
            >
              {data.salesCount}
            </p>
            <p className="max-sm:text-[14px] text-xl font-normal text-[#4F5057]">
              {data.salesLabel}
            </p>
          </span>
        </div>
        <div className="mb-3 flex items-center justify-start gap-2.5">
          <span
            className={twc(
              "max-sm:size-8 size-14 shrink-0 aspect-square flex items-center text-3xl  max-sm:text-xl justify-center bg-[#EBEBEB] rounded-full",
              active && "bg-secondary text-white"
            )}
          >
            <MdOutlineStorefront />
          </span>
          <span>
            <p
              className={twc(
                "max-sm:text-base text-2xl text-primary font-semibold",
                !active && "text-[#181818]"
              )}
            >
              {data.ordersCount}
            </p>
            <p className="max-sm:text-[14px] text-xl font-normal text-[#4F5057]">
              {data.ordersLabel}
            </p>
          </span>
        </div>
        <div className="mb-3 flex items-center justify-start gap-2.5">
          <span
            className={twc(
              "max-sm:size-8 size-14 shrink-0 aspect-square flex items-center text-3xl  max-sm:text-xl justify-center bg-[#EBEBEB] rounded-full",
              active && "bg-secondary text-white"
            )}
          >
            <TfiCup />
          </span>
          <span>
            <p
              className={twc(
                "max-sm:text-base text-2xl text-primary font-semibold",
                !active && "text-[#181818]"
              )}
            >
              {data.monthGoalCount}
            </p>
            <p className="max-sm:text-[14px] text-xl font-normal text-[#4F5057]">
              {data.monthGoalLabel}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
