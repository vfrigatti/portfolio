"use client";

import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";

const CarouselPullup = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center'
    })

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        // setScrollSnaps(emblaApi.scrollSnapList())
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        // onInit(emblaApi)
        // onSelect(emblaApi)

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
        <div className="w-full flex flex-col max-w-full">
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
                (emblaApi?.canScrollNext() || emblaApi?.canScrollPrev()) &&
                <div className="w-full flex items-center justify-between mt-4">
                    <div className="flex items-center justify-end gap-3">
                        <button
                            onClick={handlePrev}
                            disabled={emblaApi?.canScrollPrev() === false}
                            className={cn(
                                "cursor-pointer select-none size-10 rounded-xl border border-[#DBDBDB] flex items-center justify-center",
                                "disabled:opacity-50 disabled:cursor-not-allowed"
                            )}>
                            <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={emblaApi?.canScrollNext() === false}
                            className={cn(
                                "cursor-pointer select-none size-10 rounded-xl border border-[#DBDBDB] flex items-center justify-center",
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