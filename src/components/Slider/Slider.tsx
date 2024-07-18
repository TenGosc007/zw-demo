"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import { ImageCard } from "../ImageCard";

import { SliderData } from "./Slider.data";
import styles from "./Slider.module.scss";

export function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 0.4,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className={styles.slider} ref={emblaRef}>
      <div className={styles.container}>
        {SliderData.map((item) => {
          return (
            <div key={item.name} className={styles.slide}>
              <ImageCard
                img={item.img}
                name={item.name}
                role={item.role}
                fb={item.fb}
                ln={item.ln}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
