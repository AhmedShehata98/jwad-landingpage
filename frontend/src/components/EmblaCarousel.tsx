import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";

type Props = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
};
function EmblaCarousel({ options, children }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="sales-embla relative w-full pb-8">
      <div className="sales-embla__viewport" ref={emblaRef}>
        <ul className="sales-embla__container gap-4 min-h-72 py-24">
          {children}
        </ul>
      </div>
      <div className="w-[110%] flex items-center justify-between absolute -right-[5%] top-1/2 -translate-y-1/2">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}

export default EmblaCarousel;
