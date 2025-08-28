"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from "react";
import { EmblaCarouselType } from 'embla-carousel';
import { useEffect, useState } from 'react';

const CarouselPullup = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center'
    })
    const [canScroll, setCanScroll] = useState<0 | 1 | -1 | null>(null)

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        // setScrollSnaps(emblaApi.scrollSnapList())
        if (emblaApi.canScrollNext() && emblaApi.canScrollPrev()) {
            setCanScroll(0)
        } else if (emblaApi.canScrollNext()) {
            setCanScroll(1)
        } else if (emblaApi.canScrollPrev()) {
            setCanScroll(-1)
        } else {
            setCanScroll(null)
        }
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        if (emblaApi.canScrollNext() && emblaApi.canScrollPrev()) {
            setCanScroll(0)
        } else if (emblaApi.canScrollNext()) {
            setCanScroll(1)
        } else if (emblaApi.canScrollPrev()) {
            setCanScroll(-1)
        } else {
            setCanScroll(null)
        }
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        // onInit(emblaApi)
        // onSelect(emblaApi)
        onInit(emblaApi);
        emblaApi
            .on('reInit', onInit)
            .on('reInit', onSelect)
            .on('select', onSelect)
    }, [emblaApi, onInit, onSelect]);

    const handleNext = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const handlePrev = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    return (
        <div className="w-full flex flex-col max-w-full relative">
            <div className="w-full flex flex-col relative min-h-[190px]">
                <div className="w-full min-h-[190px] max-w-[100%] absolute m-auto">
                    <div ref={emblaRef} className={cn(
                        "overflow-hidden"
                    )}>
                        <div className="flex touch-pan-y ml-[-8px] relative">
                            {
                                [
                                    "01.png",
                                    "02.png",
                                    "03.png",
                                    "04.png"
                                ].map((v, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={cn(
                                                "transform-gpu min-w-[0px] pl-[8px]",
                                                i === 0 ? "flex-[0_0_107px]" : "flex-[0_0_87px]"
                                            )}>
                                            <div className="embla__slide__number h-[190px] flex items-center flex-col rounded overflow-hidden relative select-none">
                                                {
                                                    // i == a.length - 1 ?
                                                    //     <div className="w-[150px] md:w-[300px]"></div>
                                                    //     :
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={`/pullup/${v}`} alt="" className="w-full h-full object-contain" />
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                (canScroll !== null) &&
                <div className="w-full flex items-center justify-between absolute my-auto inset-y-0 pointer-events-none">
                    <div className="flex items-center justify-between w-full gap-3 px-2">
                        <button
                            onClick={handlePrev}
                            disabled={canScroll !== 0 && canScroll !== -1}
                            className={cn(
                                "shadow pointer-events-auto cursor-pointer select-none size-10 rounded-xl bg-white/10 backdrop-blur-xs border border-[#DBDBDB]/20 flex items-center justify-center",
                                "disabled:opacity-50 disabled:cursor-not-allowed"
                            )}>
                            <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={canScroll !== 0 && canScroll !== 1}
                            className={cn(
                                "shadow pointer-events-auto cursor-pointer select-none size-10 rounded-xl bg-white/10 backdrop-blur-xs border border-[#DBDBDB]/20 flex items-center justify-center",
                                "disabled:opacity-50 disabled:cursor-not-allowed"
                            )}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CarouselPullup;