"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const posts = [
  { src: "/img/work/mj-post-1.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-2.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-3.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-4.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-5.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-6.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-7.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-8.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-9.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-10.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-11.jpg", alt: "Mala Junta - Proyecto" },
  { src: "/img/work/mj-post-12.jpg", alt: "Mala Junta - Proyecto" },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      style={{ display: "flex", flexDirection: "column", paddingTop: "5rem" }}
    >
      <h2
        className="font-thin section-padding"
        style={{ fontSize: "66px", marginBottom: "2rem" }}
      >
        Work
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Swiper
          modules={[Navigation]}
          className="swiper-container swiper-work"
          slidesPerView="auto"
          centeredSlides
          spaceBetween={60}
          loop
          navigation={{
            nextEl: ".swiper-work-next",
            prevEl: ".swiper-work-prev",
          }}
          style={{ width: "100%" }}
        >
          {posts.map((p, i) => (
            <SwiperSlide key={i} style={{ width: "73vw", maxWidth: "1050px" }}>
              <div className="work-video" style={{ position: "relative", width: "100%", paddingBottom: "56.25%", overflow: "hidden" }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 73vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <button
          className="swiper-work-prev"
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "5vw",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#ff0000",
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ‹
        </button>
        <button
          className="swiper-work-next"
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "5vw",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#ff0000",
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}
