"use client";

import { useRef, useEffect } from "react";

const VIDEO_SRC = "https://videos.pexels.com/video-files/5386815/5386815-hd_1920_1080_30fps.mp4";
const VIDEO_FALLBACK = "https://videos.pexels.com/video-files/5386815/5386815-sd_960_506_30fps.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section id="hero" className="hero-section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/work/mj-post-1.jpg"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        <source src={VIDEO_FALLBACK} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">Mala Junta Creative Studio — Rosario, Argentina</p>
        <h1 className="hero-title">
          IDEAS<br />
          QUE SE<br />
          <em className="accent">QUEDAN.</em>
        </h1>
        <a href="#work" className="hero-cta">
          Ver el trabajo ↓
        </a>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
