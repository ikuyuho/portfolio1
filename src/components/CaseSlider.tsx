"use client";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[]
  title: string
};

function isPdf(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

function SlideItem({ src, label }: { src: string, label: string }) {
  if (isPdf(src)) {
    return (
      <iframe
        src={src}
        title={label}
        className="w-full h-full border-0"
      />
    );
  }
  return (
    <img src={src} alt={label} className="w-full h-full object-contain" />
  );
}

export default function CaseSlider({ images, title }: Props) {
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") sliderRef.current?.slickPrev();
      if (e.key === "ArrowRight") sliderRef.current?.slickNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const settings = {
    dots: false,
    infinite: images.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => setCurrent(index),
  };

  const canNavigate = images.length > 1;

  return (
    <div className="case-slider mb-1 relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, i) => (
          <div key={src} className="outline-none">
            <div className="aspect-video bg-warm-100 rounded-xl overflow-hidden flex items-center justify-center">
              <SlideItem
                src={src}
                label={`${title} ${i + 1}/${images.length}`}
              />
            </div>
          </div>
        ))}
      </Slider>

      {canNavigate && (
        <>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-0 w-1/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 z-10 bg-black/30 hover:bg-black/45 rounded-l-xl"
            style={{ bottom: "2rem" }}
            aria-label="前のスライド"
          >
            <span className="text-white text-5xl select-none leading-none">‹</span>
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-0 w-1/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 z-10 bg-black/30 hover:bg-black/45 rounded-r-xl"
            style={{ bottom: "2rem" }}
            aria-label="次のスライド"
          >
            <span className="text-white text-5xl select-none leading-none">›</span>
          </button>
        </>
      )}

      {/* セグメントインジケーター */}
      <div className="flex items-center justify-center gap-1 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-gray-700 w-6"
                : "bg-gray-300 w-4"
            }`}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
        <span className="ml-3 text-xs text-text-muted tabular-nums">
          {current + 1}
          {" "}
          /
          {images.length}
        </span>
      </div>
    </div>
  );
}
