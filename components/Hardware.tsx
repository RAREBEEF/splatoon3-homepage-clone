import Image from "next/image";
import oled from "../public/images/hardwares/nintendo-oled.webp";
import basic from "../public/images/hardwares/nintendo-basic.webp";
import light from "../public/images/hardwares/nintendo-light.webp";
import splatOrange from "../public/images/etc/splat-orange.png";
import splatMorePurple from "../public/images/etc/splat-morePurple.png";
import graffiti from "../public/images/etc/graffiti1.webp";
import Button from "./Button";
import React, { useEffect, useRef, useState } from "react";
import useScrollTrigger from "../hooks/useScrollTrigger";

const Hardware = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleAnimationStart, setTitleAnimationStart] =
    useState<boolean>(false);

  const hardwareRef = useRef<HTMLDivElement>(null);
  const [hardwareAnimationStart, setHardwareAnimationStart] =
    useState<boolean>(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [descriptionAnimationStart, setdescriptionAnimationStart] =
    useState<boolean>(false);

  const buttonRef = useRef<HTMLDivElement>(null);
  const [buttonAnimationStart, setButtonAnimationStart] =
    useState<boolean>(false);

  const scrollTrigger = useScrollTrigger();

  useEffect(() => {
    scrollTrigger(titleRef, () => {
      setTitleAnimationStart(true);
    });
    scrollTrigger(hardwareRef, () => {
      setHardwareAnimationStart(true);
    });
    scrollTrigger(descriptionRef, () => {
      setdescriptionAnimationStart(true);
    });
    scrollTrigger(buttonRef, () => {
      setButtonAnimationStart(true);
    });
  }, [scrollTrigger]);

  return (
    <article className="container-none relative pt-[8%] pb-[8%] sm:pt-[15%]">
      <div>
        <div className="absolute w-[25%] top-[-10%] left-[-10%] sm:left-[5%] sm:top-[15%] sm:w-[35%]">
          <Image src={splatOrange} alt="splat" placeholder="blur" />
        </div>
        <div className="absolute w-[35%] top-[30%] left-[-15%] sm:left-[5%] sm:top-[30%] sm:w-[45%]">
          <Image src={graffiti} alt="splat" placeholder="blur" />
        </div>
        <div className="absolute w-[20%] top-[20%] right-[10%] sm:right-[-5%] sm:top-[15%] sm:w-[15%]">
          <Image src={splatOrange} alt="splat" placeholder="blur" />
        </div>
        <div className="absolute rotate-180 w-[30%] bottom-[-5%] right-[-10%] sm:right-[7%] sm:bottom-[25%] sm:w-[50%]">
          <Image src={splatMorePurple} alt="splat" placeholder="blur" />
        </div>
      </div>
      <h2
        ref={titleRef}
        className={`fooFont w-[90%] mx-auto pb-[3%] text-center rotate-[-2deg] transition-all duration-500 ease-in-out ${
          titleAnimationStart ? "afterScaleOpacity" : "beforeScaleOpacity"
        }`}
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
          className="flex justify-evenly gap-[5%] sm:flex-col sm:w-[60%] sm:mx-auto"
        >
          <div
            className={`basis-[25%] my-auto transition-all duration-500 ease-in-out delay-200 sm:order-2 sm:w-[65%] sm:mx-auto sm:mb-[5%] ${
              hardwareAnimationStart
                ? "afterScaleOpacity"
                : "beforeScaleOpacity"
            }`}
          >
            <Image src={basic} alt="Nintendo Switch" placeholder="blur" />
          </div>
          <div
            className={`basis-[35%] my-auto transition-all duration-500 ease-in-out delay-100 sm:order-1 sm:w-[80%] sm:mx-auto sm:mb-[5%] ${
              hardwareAnimationStart
                ? "afterScaleOpacity"
                : "beforeScaleOpacity"
            }`}
          >
            <Image src={oled} alt="Nintendo Switch OLED" placeholder="blur" />
          </div>
          <div
            className={`basis-[25%] my-auto transition-all duration-500 ease-in-out delay-300 sm:order-3 sm:w-[55%] sm:mx-auto ${
              hardwareAnimationStart
                ? "afterScaleOpacity"
                : "beforeScaleOpacity"
            }`}
          >
            <Image src={light} alt="Nintendo Switch Light" placeholder="blur" />
          </div>
        </div>
        <p
          ref={descriptionRef}
          className={`relative w-[45%] mt-[10%] mb-[3%] mx-auto font-sans2 text-white text-center text-xl transition-all duration-500 ease-in-out md:text-lg md:w-[80%] sm:mb-[5%] sm:w-full ${
            descriptionAnimationStart
              ? "afterTranslateYOpacity"
              : "beforeTranslateYOpacity"
          }`}
        >
          The Splatoon 3 game is available exclusively on the Nintendo Switch
          family of systems.
        </p>
        <div
          ref={buttonRef}
          className={`w-[300px] sm:w-full mx-auto transition-all duration-500 ease-in-out delay-100 ${
            buttonAnimationStart ? "afterScaleOpacity" : "beforeScaleOpacity"
          }`}
        >
          <Button
            bgColor={["morePurple", "orange"]}
            textColor={["black", "black"]}
            borderColor="black"
          >
            <div>Choose your system</div>
          </Button>
        </div>
      </section>
    </article>
  );
};

export default Hardware;
