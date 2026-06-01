"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[];
  title: string;
};

function isPdf(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

function SlideItem({ src, label }: { src: string; label: string }) {
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
  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: images.length > 1,
  };

  return (
    <div className="case-slider pb-8 mb-1">
      <Slider {...settings}>
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
    </div>
  );
}
