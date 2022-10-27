import Image from "next/image";
import screenshot from "../public/images/etc/screenshot1.webp";
import tape from "../public/images/etc/tape1.webp";
import Button from "./Button";
import graffiti1 from "../public/images/etc/graffiti1.webp";
import graffiti2 from "../public/images/etc/graffiti2.webp";
import splatOrange from "../public/images/etc/splat-orange.png";
import splatMorePurple from "../public/images/etc/splat-morePurple.png";
import splatNeonGreen from "../public/images/etc/splat-neonGreen.png";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import useScrollTrigger from "../hooks/useScrollTrigger";

const Splatlands = () => {
  const firstBoxRef = useRef<HTMLDivElement>(null);
  const secondBoxRef = useRef<HTMLDivElement>(null);
  const [firstAnimationStart, setfirstAnimationStart] =
    useState<boolean>(false);
  const [secondAnimationStart, setSecondAnimationStart] =
    useState<boolean>(false);
  const scrollTrigger = useScrollTrigger();

  useEffect(() => {
    scrollTrigger(firstBoxRef, () => {
      setfirstAnimationStart(true);
    });
    scrollTrigger(secondBoxRef, () => {
      setSecondAnimationStart(true);
    });
  }, [scrollTrigger]);

  return (
    <article className="container-none mx-auto max-w-[1500px] flex flex-col gap-[20px] mt-[100px] sm:mt-[80px]">
      <section className="fooFont relative flex w-[90%] px-[5%] mx-auto gap-[5%] md:flex-col sm:w-[95%] sm:px-non">
        <div className="absolute w-[60%] bottom-[-40%] right-[-40%]">
          <Image src={graffiti1} alt="graffiti" placeholder="blur" />
        </div>
        <div className="grow relative">
          <div className="absolute left-[-30%] top-[-10%] w-[50%] md:w-[20%] md:left-[-10%]">
            <Image src={splatOrange} alt="splat" placeholder="blur" />
          </div>
          <h2 className="relative z-20 w-fit mx-auto rotate-[-5deg] text-orange text-5xl text-center sm:text-3xl">
            INK UP THE
            <br />
            <span className="text-white text-7xl sm:text-5xl">SPLATLANDS</span>
          </h2>
          <div className="relative z-10 mt-[-20px] px-[15%] pt-[10%] pb-[10%] flex flex-col gap-[30px] rounded-lg text-center leading-9 bg-black sm:px-[10%] sm:pt-[15%]">
            <p className="relative font-medium text-white text-xl font-sans2 sm:text-lg">
              Enter a sun-scorched desert inhabited by battle-hardened Inklings
              and Octolings. Ink, dive, swim, and splat your way to the top!
            </p>
            <div className="w-[320px] min-w-[250px] mx-auto sm:w-full">
              <Button bgColor={["morePurple", "orange"]} borderColor="black">
                <div>Welcome to Splatsville</div>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative z-10 basis-[120%]">
          <div className="absolute left-[-10%] bottom-[-30%] w-[120%] rotate-[-20deg] md:w-[40%] md:right-[10%] md:left-auto md:bottom-[-50%] sm:hidden">
            <Image src={splatMorePurple} alt="splat" placeholder="blur" />
          </div>
          <div className="absolute mx-auto h-fit w-[120%] grow border-[10px] border-white rounded-sm bg-white rotate-2 md:static md:w-[80%] sm:w-[90%]">
            <div>
              <Image src={screenshot} alt="Splatlands" placeholder="blur" />
            </div>
          </div>
          <div className="absolute w-[30%] right-[20%] top-[-5%] md:top-[-12%] md:right-0 md:left-0 md:mx-auto">
            <Image src={tape} alt="tape" placeholder="blur" />
          </div>
        </div>
      </section>

      <section className="relative z-20 flex col-2 w-[90%] mt-[200px] mx-auto px-[5%] gap-[5%] md:w-[95%] md:px-0 sm:flex-col sm:col-1 sm:mt-[120px]">
        <div className="absolute w-[60%] bottom-[-40%] right-[-5%] sm:bottom-[-15%]">
          <Image src={graffiti2} alt="graffiti" placeholder="blur" />
        </div>
        <div className="relative basis-[100%] pt-[5%] pb-[3%] flex flex-col gap-5 items-center rotate-[-2deg] md:mb-[10%] sm:px-[5%] sm:pt-[8%]">
          <div className="absolute left-[-25%] top-[-20%] w-[50%] rotate-180 md:w-[40%] md:left-0 md:top-[-20%]">
            <Image src={splatNeonGreen} alt="splat" placeholder="blur" />
          </div>
          <div
            ref={firstBoxRef}
            className="absolute top-0 bottom-0 left-0 right-0 m-auto"
          >
            <svg
              viewBox="0 0 566 555"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="m311.748694 27.1685099h-55.497388c-2.987542 0-5.410583-2.41764-5.410583-5.3985227s2.423041-5.3985227 5.410583-5.3985227h21.676089v-.3817326c0-3.3457742 2.719357-6.05906986 6.072605-6.05906986s6.072605 2.71329566 6.072605 6.05906986v.3817326h21.676089c2.987542 0 5.410583 2.41764 5.410583 5.3985227s-2.423041 5.3985227-5.410583 5.3985227m248.671936-18.68057264c-.480108-.68300201-2.89002-2.0040963-2.89002-2.0040963l-1.911052.14595659-1.860415.76907897-1.714133-.13285792-.783925-.39108882.146283-.75785154-.517616-1.52880175s.94146-3.10064198.495111-3.26343972c-.590757-.21332118-1.194642-.40418749-1.807904-.56885647-.613262-.16279774-1.237776-.30314061-1.869792-.41354368-1.265908-.2245486-2.569324-.34243662-3.900871-.34243662h-18.062157l-2.473677.86451213-1.468453 1.75896407-1.665371-.48839322-1.860416.87948204-2.449296-.97865767-1.470329-1.07409083-4.774815-.96181652h-79.04702l-5.950703 1.25560095-4.701675 2.53927047-3.011922-1.63546234h-2.938781l-3.141326 1.01795368 1.157133-1.3847164 2.741862-1.79264636-2.473677.86451213-1.468453 1.75896407-1.665371-.48839322-.748292.35366405-2.361152-1.23314608-3.730208-.5071056-3.715204-.74849535.857066.35927777-2.64434-.35927777h-170.15566l-8.4 1.76832026-6.856531 1.75896407-5.877561-2.34653292-3.91775.39108882-4.309712.97865767-4.506631.19460879-1.762893-1.17326646-8.251842-1.57184023h-160.507435c-1.2377763 0-2.4511722.10104687-3.6345613.29565566-1.1833892.19460879-2.3330208.4827795-3.445144.85515594-.6301407.40231625-1.8266578 1.5213168-1.8266578 1.5213168l-1.106497.78966259-2.39490954.72416925-1.49845948 1.15268284-1.29778968 1.64107605.03563295 1.39220135-.43884796.7952763-1.3596785.87012582-1.02960482 1.6822433s-1.64849297.60441-2.13047555 1.0797046c-1.32592096 2.8405398-2.06671132 6.0066751-2.06671132 9.3449644v499.9200981l3.31949096 13.242754 4.13904889 7.183684 5.48559945 4.300106 5.680643 1.270571 9.5027462 2.640317 11.1906229.658676 6.9784327 1.758964 8.3756195.51272 7.6892164 1.367875h109.36852l6.269524-.877611 1.714133-.245132 1.665372-1.221919 2.154856 1.173267 6.61085 1.171395h175.446216l6.83215-.890709 1.640991-1.307996 1.468453-.097304 3.465774 1.111515 14.361955.258231 31.591427.926263 18.022773-1.074091 7.933021-2.93223 3.268854 2.350275 6.367047-.40793 4.309712-.959945 2.927528.495878 4.712927-.301269 3.233222-1.270571 14.300067-.976787 6.155124.351793 5.6.233905 6.843402-.851414 3.718955-.185252 9.125787.351793 10.446082-1.322966 4.714802-4.27578 5.12927-1.58681 2.839384-2.640317 2.303014-4.739847 1.957937-1.367875 4.017147.19648 4.667917-6.259292 1.370931-5.013048 2.434293-3.925858 1.370931-5.570677 1.370931-5.473372 1.907301-5.600616v-480.0999421c0-4.0287762-1.078366-7.8068065-2.963161-11.0627613-.324448-.5595002-2.246752-2.06771836-2.616209-2.59353634z"
                fill="#603bff"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h4
            className={`relative transition-all duration-500 ease-in-out text-4xl font-sans text-white text-center mb-[20px] px-[5%] md:text-2xl md:mb-0 md:px-[3%] sm:px-0 ${
              firstAnimationStart
                ? "afterTranslateYOpacity"
                : "beforeTranslateYOpacity"
            }`}
          >
            How to play, game modes, and all that
          </h4>

          <div
            className={`relative mx-[5%] mt-[5%] transition-all duration-500 delay-200 ease-in-out ${
              firstAnimationStart ? "afterScaleOpacity" : "beforeScaleOpacity"
            }`}
          >
            <video
              playsInline
              muted
              autoPlay
              loop
              className="relative border-[5px] border-white border-solid rounded-sm"
            >
              <source src="/videos/howtoplay.mp4"></source>
            </video>
            <div className="absolute w-[30%] top-[-10%] left-0 right-0 mx-auto">
              <Image src={tape} alt="tape" placeholder="blur" />
            </div>
          </div>
          <div
            className={`
              min-w-[160px] mx-auto sm:w-full transition-all duration-500 delay-200 ease-in-out
              ${
                firstAnimationStart
                  ? "afterTranslateYOpacity"
                  : "beforeTranslateYOpacity"
              }`}
          >
            <Button
              bgColor={["neonGreen", "purple"]}
              textColor={["black", "white"]}
              borderColor="white"
            >
              <div>Dive in</div>
            </Button>
          </div>
        </div>

        <div
          ref={secondBoxRef}
          className="relative basis-[100%] pt-[5%] pb-[3%] flex flex-col gap-5 items-center rotate-2 translate-y-[-100px] md:mb-[10%] sm:translate-y-0 sm:px-[5%] sm:pt-[8%]"
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto">
            <svg
              viewBox="0 0 566 555"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="m311.748694 27.1685099h-55.497388c-2.987542 0-5.410583-2.41764-5.410583-5.3985227s2.423041-5.3985227 5.410583-5.3985227h21.676089v-.3817326c0-3.3457742 2.719357-6.05906986 6.072605-6.05906986s6.072605 2.71329566 6.072605 6.05906986v.3817326h21.676089c2.987542 0 5.410583 2.41764 5.410583 5.3985227s-2.423041 5.3985227-5.410583 5.3985227m248.671936-18.68057264c-.480108-.68300201-2.89002-2.0040963-2.89002-2.0040963l-1.911052.14595659-1.860415.76907897-1.714133-.13285792-.783925-.39108882.146283-.75785154-.517616-1.52880175s.94146-3.10064198.495111-3.26343972c-.590757-.21332118-1.194642-.40418749-1.807904-.56885647-.613262-.16279774-1.237776-.30314061-1.869792-.41354368-1.265908-.2245486-2.569324-.34243662-3.900871-.34243662h-18.062157l-2.473677.86451213-1.468453 1.75896407-1.665371-.48839322-1.860416.87948204-2.449296-.97865767-1.470329-1.07409083-4.774815-.96181652h-79.04702l-5.950703 1.25560095-4.701675 2.53927047-3.011922-1.63546234h-2.938781l-3.141326 1.01795368 1.157133-1.3847164 2.741862-1.79264636-2.473677.86451213-1.468453 1.75896407-1.665371-.48839322-.748292.35366405-2.361152-1.23314608-3.730208-.5071056-3.715204-.74849535.857066.35927777-2.64434-.35927777h-170.15566l-8.4 1.76832026-6.856531 1.75896407-5.877561-2.34653292-3.91775.39108882-4.309712.97865767-4.506631.19460879-1.762893-1.17326646-8.251842-1.57184023h-160.507435c-1.2377763 0-2.4511722.10104687-3.6345613.29565566-1.1833892.19460879-2.3330208.4827795-3.445144.85515594-.6301407.40231625-1.8266578 1.5213168-1.8266578 1.5213168l-1.106497.78966259-2.39490954.72416925-1.49845948 1.15268284-1.29778968 1.64107605.03563295 1.39220135-.43884796.7952763-1.3596785.87012582-1.02960482 1.6822433s-1.64849297.60441-2.13047555 1.0797046c-1.32592096 2.8405398-2.06671132 6.0066751-2.06671132 9.3449644v499.9200981l3.31949096 13.242754 4.13904889 7.183684 5.48559945 4.300106 5.680643 1.270571 9.5027462 2.640317 11.1906229.658676 6.9784327 1.758964 8.3756195.51272 7.6892164 1.367875h109.36852l6.269524-.877611 1.714133-.245132 1.665372-1.221919 2.154856 1.173267 6.61085 1.171395h175.446216l6.83215-.890709 1.640991-1.307996 1.468453-.097304 3.465774 1.111515 14.361955.258231 31.591427.926263 18.022773-1.074091 7.933021-2.93223 3.268854 2.350275 6.367047-.40793 4.309712-.959945 2.927528.495878 4.712927-.301269 3.233222-1.270571 14.300067-.976787 6.155124.351793 5.6.233905 6.843402-.851414 3.718955-.185252 9.125787.351793 10.446082-1.322966 4.714802-4.27578 5.12927-1.58681 2.839384-2.640317 2.303014-4.739847 1.957937-1.367875 4.017147.19648 4.667917-6.259292 1.370931-5.013048 2.434293-3.925858 1.370931-5.570677 1.370931-5.473372 1.907301-5.600616v-480.0999421c0-4.0287762-1.078366-7.8068065-2.963161-11.0627613-.324448-.5595002-2.246752-2.06771836-2.616209-2.59353634z"
                fill="#eaff3d"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h4
            className={`relative transition-all duration-500 ease-in-out text-4xl font-sans text-center mb-[20px] px-[5%] md:text-2xl md:mb-0 md:px-[3%] sm:px-0
             ${
               secondAnimationStart
                 ? "afterTranslateYOpacity"
                 : "beforeTranslateYOpacity"
             }`}
          >
            Make a splash with the latest weapons and gear
          </h4>

          <div
            className={`relative mx-[5%] mt-[5%] transition-all duration-500 delay-200 ease-in-out
              ${
                secondAnimationStart
                  ? "afterScaleOpacity"
                  : "beforeScaleOpacity"
              }
            `}
          >
            <video
              playsInline
              muted
              autoPlay
              loop
              className="relative border-[5px] border-white border-solid rounded-sm"
            >
              <source src="/videos/weapons.mp4"></source>
            </video>
            <div className="absolute w-[30%] top-[-10%] left-0 right-0 mx-auto">
              <Image src={tape} alt="tape" placeholder="blur" />
            </div>
          </div>
          <div
            className={`min-w-[160px] mx-auto sm:w-full transition-all duration-500 delay-200 ease-in-out
              ${
                secondAnimationStart
                  ? "afterTranslateYOpacity"
                  : "beforeTranslateYOpacity"
              }`}
          >
            <Button
              bgColor={["purple", "neonGreen"]}
              textColor={["white", "black"]}
              borderColor="black"
            >
              <div>Fit check</div>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Splatlands;
