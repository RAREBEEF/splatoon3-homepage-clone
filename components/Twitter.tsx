import Image from "next/image";
import character from "../public/images/characters/character5.webp";
import splatMint from "../public/images/etc/splat-mint.png";
import graffiti1 from "../public/images/etc/graffiti3.webp";
import graffiti2 from "../public/images/etc/graffiti4.webp";
import frame from "../public/images/etc/twitter-frame.webp";
import Button from "./Button";
import Script from "next/script";
import { useEffect } from "react";

const Twitter = () => {
  useEffect(() => {
    // @ts-ignore
    if (typeof twttr !== "undefined") twttr.widgets.load();
  }, []);

  return (
    <article className="container-none z-10 relative bg-red mt-[-1px] pt-[50px] pb-[100px]">
      <svg
        className="absolute top-[100%] translate-y-[-10px] fill-red"
        viewBox="0 0 1450 76"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 36.28 5.381 12.647c.104.044.224.073.32.121 6.709.01 12.648-1.55 19.052-2.16 1.411-.136 2.763-.421 4.172-.57 2.878-.303 4.476 2.039 8.288.267 1.914-.89 4.628-1.513 6.98-2.256.04-.302.081-.608.125-.913 2.037-.43 12.258 17.359 13.918 16.76 4.596-1.66 8.302 1.057 13.359 1.313 5.74.291 6.819 4.109 12.4 4.656 4.544.444 4.913 1.677 9.893 1.447 3.493-.162 3.108.222 5.866.87 5.098 1.198 5.707 2.357 2.75 4.748-.85.686 5.565.968 4.677 1.648.683.285 1.363.573 2.046.856.002 0-.298.13-.3.132.035.009.062.02.092.029.071-.052.14-.107.21-.161 2.892.04 6.128-3.596 9.023-3.556-.09.565-.178 1.127-.265 1.689.737-.02 1.472-.026 2.203-.018l.06-.02c1.038-.743 2.704-.904 4.53-.916l.07-.023c.728-.303 1.51-.585 2.337-.841 4.532-1 9.669-1.452 13.787-2.824 1.22-.714 2.679 2.867 4.541 2.714 4.487-.366 8.67-1.017 11.43-2.711 1.066-2.354 1.574-4.797 7.53-6.376a9.49 9.49 0 0 1 .264-.864c.522-1.879 3.867-2.833 7.668-3.68 3.269-.729 7.127-1.146 8.984-2.685l7.285-3.621-.04-.018c1.27-3.109 12.25.683 16.875-1.74 1.513-.792 3.575-1.219 5.885-1.184 12.637.178 25.77-.767 37.593 1.28 1.947.336 4.115.829 6.133.722 9.252-.487 10.707-4.244 19.32-3.967.565.017.991.366 1.48.562l2.09.855c19.966 1.608 39.3 4.126 59.493 5.293 10.166.588 22.607-5.163 28.05-2.017.024.141.032.268.027.386 3.028-.875 3.449-.778 4.208.888 6.529.104 13.06.201 19.582.322 1.046.02 2.375.01 3.03.248 3.553 1.294 8.056.934 12.445.816.073-.24.177-.473.294-.706-.051-.04-.109-.08-.16-.121 4.983-1.916 11.88-2.426 17.162-4.17 2.04-.67 3.976.197 5.953.372.835.234 1.796.421 2.482.71 3.181 1.348 6.756 1.054 10.546.074 3.268-1.492 6.532-2.982 9.8-4.472 2.559-1.924 7.807-2.431 11.636-3.687 6.264-1.467 5.81 11.34 11.542 9.438 3.16-1.048 6.759-1.446 10.295-.553.888.375.666.792.098 1.222l.123-.02c.407-.185.768-.384 1.052-.608 9.3-3.222 15.171-3.714 24.32-1.867 4.519-1.908 18.841-5.403 23.423-7.27 1.764-.74 3.965-.861 6.207-.881 4.79-.04 4.219-3.872 8.97-3.798 2.941.047 5.443-.265 8.329-.628 6.81-.855 17.35 2.455 23.943 3.334 6.54.873 13.203 1.317 20.343 1.049 5.59-.21 7.657-3.389 12.802-2.706 6.69.885 14.006 1.13 20.213 2.501 8.79 1.078 17.11 2.472 23.757 4.999h-.003c.636.006 1.259.029 1.879.066 7.616-.916 14.767-2.365 21.755-3.918 9.571-2.13 19.292-2.541 28.888-1.484 6.576.726 12.854.588 19.383-.444 1.736-.273 3.793-.492 5.016-.997 3.13-1.293 6.98-1.806 10.879-2.394 1.723-.256 3.9-.625 4.779-1.19 5.032-3.224 12.957-3.353 20.54-3.9 9.42-2.006 19.254-2.314 29.036-1.946 6.591.248 13.063.044 19.565-.648 3.32-.354 6.59-.634 9.773-.32 6.346.631 14.874 10.22 21.43 10.214 10.79-1.625 19.826-12.078 30.74-11.473 3.987.22 4.397 10.263 8.367 9.955 8.01-.623 14.535.1 19.88 2.2 2.864 1.127 6.01 1.45 9.865.51 3.668-.895 7.196-.599 10.727-.279 2.108.19 4.112.54 6.253.651 4.35.22 12.34-9.355 16.573-10.438 1.28-.328 2.796-.487 4.147-.775 9.075-1.922 18.416-2.645 28.135-2.196 2.504.116 5.15-.008 7.73-.092 8.408-.268 16.77-.507 25.194-.55 9.18-.049 18.036-.012 26.993.602 6.575.452 13.631.513 20.802-.501 4.842-.683 10.134-.879 15.3-.539 3.168.207 13.708-17.313 17.02-17.33h.003c4.981-.452 14.926-.13 17.619.567 5.013 1.303 7.146 2.887 4.956 5.071-2.313 2.308-1.428 3.942 2.496 5.457 1.472.57 2.428 1.351 3.62 2.037 2.68.25 3.98 1.507 7.707 1.138 3.883-.389 6.717.787 9.83 1.4 4.81.951 9.495 1.902 15.42 1.577 1.767-.096 3.76.023 5.32.3 3.782.668 7.848.446 11.881.4l.047-.009c.47-.464 1.302-.746 2.512-.841 2.245-.323 4.492-.646 6.737-.971 2.894-2.043 8.113-2.74 12.878-3.4 5.376-.743 10.193-1.838 15.01-3.014 11.72-3.302 17.351 11.87 30.936 10.56a190.347 190.347 0 0 0 14.992-2.029c5.532-.982 10.322-.772 14.396.54 4.585 1.474 6.835 6.133 13.088 5.926 1.057-.035 2.988-.816 3.157.25.904 5.685 12.162 1.637 18.042 2.622 5.316.888 10.147 2.078 10.385 4.818 2.57 1.792 9.358-.79 13.126.541 7.36.96 14.907 1.622 22.93 1.573 2.867-.02 5.873-.19 8.066.695 3.52-.064 6.234.541 8.747 1.36 6.518 2.114 10.171-3.178 14.232-.098 2.228 1.69 5.997 2.29 11.03 1.498 2.156-.34 7.345 6.788 9.483 7.044 8.105.974 15.633-13.394 24.02-13.409 4.245-1.048 8.265-2.518 12.779-3.054a126.84 126.84 0 0 0 3.886-.524l-.033-.418.079.066V.568H0l2 35.711Z"
          fillRule="evenodd"
        ></path>
      </svg>
      <div className="flex w-full justify-evenly pr-[100px] md:flex-col md:pr-0">
        <div className="flex items-center w-[800px] md:w-[55%] md:mx-auto sm:w-[80%]">
          <div className="absolute left-0 w-[40%] top-[15%] left-[-15%] md:left-0 md:top-[10%] md:w-[30%]">
            <Image src={splatMint} alt="splat" />
          </div>
          <div className="hidden md:block absolute w-[30%] right-0 top-[20%] sm:hidden">
            <Image src={splatMint} alt="splat" />
          </div>
          <div className="relative h-fit">
            <div className="absolute top-[-10%] left-0 right-0 mx-auto w-[60%] md:left-0 md:right-auto">
              <Image src={graffiti1} alt="Graffiti" priority />
            </div>
            <div className="absolute top-[10%] right-[-7%] w-[15%] md:w-[30%] md:right-[-10%]">
              <Image src={graffiti2} alt="Graffiti" priority />
            </div>
            <div className="relative z-10 mt-[40%] right-[-20%] w-[100%] md:right-0 md:w-[120%] md:mt-[20%]">
              <Image src={character} alt="Octoling" priority />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-y-[35px] items-center md:gap-y-[15px]">
          <div className="absolute w-[100%] top-[15%] right-[-50%] md:w-[30%] md:top-[20%] md:right-0 sm:right-[-15%]">
            <Image src={splatMint} alt="splat" />
          </div>
          <div className="absolute rotate-180 z-0 w-[60%] bottom-[-5%] left-[-30%] md:w-[30%] md:bottom-[10%] md:left-[5%] sm:left-[-15%]">
            <Image src={splatMint} alt="splat" />
          </div>
          <h2 className="relative fooFont text-center text-5xl md:text-3xl">
            <div>SQUID RESEARCH</div>
            <div className="md:mt-[-5px]">LAB UPDATES</div>
          </h2>

          <div className="relative z-20 max-w-[620px] w-[40vw] bg-black rounded-lg md:w-[70%] sm:w-[90%]">
            <div className="min-h-[785px] border-[10px] border-white border-solid rounded-lg rounded-b-none text-white text-2xl font-bold">
              <a
                className="twitter-timeline"
                data-height="785"
                data-theme="dark"
                href="https://twitter.com/SplatoonNA?ref_src=twsrc%5Etfw"
              >
                Tweets by SplatoonNA
              </a>
              <Script async src="https://platform.twitter.com/widgets.js" />
              <div className="absolute top-[99%] left-0 right-0 mx-auto">
                <Image src={frame} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[350px] min-w-[250px] mx-auto md:mt-[20px] sm:w-[90%]">
            <Button
              bgColor={["twitter", "white"]}
              textColor={["white", "twitter"]}
              borderColor="twitter"
            >
              <div className="relative flex items-center">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="w-[20px] h-[20px] mr-[7px] translate-y-[4px]"
                  viewBox="0 0 27 22"
                >
                  <path
                    d="M8.452 21.838c10.141 0 15.688-8.403 15.688-15.689 0-.239 0-.476-.016-.713 1.08-.78 2.01-1.747 2.751-2.854a11.006 11.006 0 0 1-3.167.868A5.533 5.533 0 0 0 26.132.4a11.05 11.05 0 0 1-3.501 1.338 5.52 5.52 0 0 0-9.397 5.03A15.654 15.654 0 0 1 1.87 1.005a5.518 5.518 0 0 0 1.708 7.36 5.473 5.473 0 0 1-2.503-.69v.07a5.516 5.516 0 0 0 4.424 5.406 5.505 5.505 0 0 1-2.49.094 5.52 5.52 0 0 0 5.151 3.83A11.064 11.064 0 0 1 0 19.36a15.61 15.61 0 0 0 8.452 2.472"
                    stroke="none"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Follow these eggheads
              </div>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Twitter;
