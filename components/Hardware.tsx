import Image from "next/image";
import oled from "../public/images/hardwares/nintendo-oled.webp";
import basic from "../public/images/hardwares/nintendo-basic.webp";
import light from "../public/images/hardwares/nintendo-light.webp";
import splatOrange from "../public/images/etc/splat-orange.png";
import splatMorePurple from "../public/images/etc/splat-morePurple.png";
import graffiti from "../public/images/etc/graffiti1.webp";
import Button from "./Button";
import React, { useEffect, useRef } from "react";
import styles from "./Hardware.module.scss";
import classNames from "classnames";

const Hardware = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hardwareRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrigger = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles["start"]);
        });
      },
      { threshold: 0.5 }
    );

    if (!titleRef.current) return;
    scrollTrigger.observe(titleRef.current);
    if (!hardwareRef.current) return;
    scrollTrigger.observe(hardwareRef.current);
    if (!descriptionRef.current) return;
    scrollTrigger.observe(descriptionRef.current);
  }, []);

  return (
    <article className="container-none relative pt-[8%] pb-[8%] sm:pt-[15%]">
      <div>
        <div className="absolute w-[25%] top-[-10%] left-[-10%] sm:left-[5%] sm:top-[15%] sm:w-[35%]">
          <Image src={splatOrange} alt="splat" />
        </div>
        <div className="absolute w-[35%] top-[30%] left-[-15%] sm:left-[5%] sm:top-[30%] sm:w-[45%]">
          <Image src={graffiti} alt="splat" />
        </div>
        <div className="absolute w-[20%] top-[20%] right-[10%] sm:right-[-5%] sm:top-[15%] sm:w-[15%]">
          <Image src={splatOrange} alt="splat" />
        </div>
        <div className="absolute rotate-180 w-[30%] bottom-[-5%] right-[-10%] sm:right-[7%] sm:bottom-[25%] sm:w-[50%]">
          <Image src={splatMorePurple} alt="splat" />
        </div>
      </div>
      <h2
        ref={titleRef}
        className={classNames(
          styles.header,
          "fooFont w-[90%] mx-auto pb-[3%] text-center rotate-[-2deg]"
        )}
      >
        <div className="text-orange text-5xl md:text-3xl">ONLY ON THE</div>
        <div className="text-white text-7xl md:text-5xl sm:text-3xl">
          NINTENDO SWITCH™ SYSTEM
        </div>
      </h2>
      <section className="relative pt-[2%] w-[90%] mx-auto">
        <picture className="absolute w-[80%] top-[3%] left-0 right-0 top-0 bottom-0 m-auto sm:w-[70%] sm:bottom-auto sm:top-[-1%] ">
          <source
            media="(min-width: 640px)"
            srcSet="/images/etc/tapes.png"
            type="image/webp"
            width="1947"
            height="952"
          />
          <img src="/images/etc/tapes2.png" alt="" />
        </picture>
        <div
          ref={hardwareRef}
          className={classNames(
            styles["hardware-wrapper"],
            "flex justify-evenly gap-[5%] sm:flex-col sm:w-[60%] sm:mx-auto"
          )}
        >
          <div className="basis-[25%] my-auto sm:order-2 sm:w-[65%] sm:mx-auto sm:mb-[5%]">
            <Image src={basic} alt="Nintendo Switch" priority />
          </div>
          <div className="basis-[35%] my-auto sm:order-1 sm:w-[80%] sm:mx-auto sm:mb-[5%]">
            <Image src={oled} alt="Nintendo Switch OLED" priority />
          </div>
          <div className="basis-[25%] my-auto sm:order-3 sm:w-[55%] sm:mx-auto">
            <Image src={light} alt="Nintendo Switch Light" priority />
          </div>
        </div>
        <div ref={descriptionRef} className={styles["description-wrapper"]}>
          <p className="relative w-[45%] mt-[10%] mb-[3%] mx-auto font-sans2 text-white text-center text-xl md:text-lg md:w-[80%] sm:mb-[5%] sm:w-full">
            The Splatoon 3 game is available exclusively on the Nintendo Switch
            family of systems.
          </p>
          <div className="w-[300px] sm:w-full mx-auto">
            <Button
              bgColor={["morePurple", "orange"]}
              textColor={["black", "black"]}
              borderColor="black"
            >
              <div>Choose your system</div>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Hardware;
