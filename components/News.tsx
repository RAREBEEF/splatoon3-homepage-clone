import styles from "./News.module.scss";
import classNames from "classnames";
import splatRed from "../public/images/etc/splat-red.png";
import banner1 from "../public/images/banners/banner-news1.webp";
import banner2 from "../public/images/banners/banner-news2.webp";
import news1 from "../public/images/news/slide-item1.png";
import news2 from "../public/images/news/slide-item2.jpeg";
import news3 from "../public/images/news/slide-item3.png";
import news4 from "../public/images/news/slide-item4.jpeg";
import news5to6 from "../public/images/news/slide-item5to6.jpeg";
import Image, { StaticImageData } from "next/image";
import staple2 from "../public/images/etc/staple2.webp";
import staple1 from "../public/images/etc/staple.webp";
import banner3 from "../public/images/banners/banner-news3.webp";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Power1, Power4 } from "gsap";
import _ from "lodash";

const NewsList: Array<{ thumb: StaticImageData; content: string }> = [
  {
    thumb: news1,
    content:
      "Splatoon x Pokémon! Get ready for a special Splatfest collaboration in November",
  },
  {
    thumb: news2,
    content: "Get an exclusive Splashtag banner with SplatNet 3",
  },
  {
    thumb: news3,
    content:
      "A new Splatfest is headed to Splatoon 3 and it’s going to be a scorcher!",
  },
  {
    thumb: news4,
    content:
      "Fast, fun, and frant-ink action awaits in Splatoon 3, available now",
  },
  {
    thumb: news5to6,
    content: "ASK THE DEVELOPER VOL. 7, SPLATOON 3-PART 3",
  },
  {
    thumb: news5to6,
    content: "Ask the Developer Vol. 7, Splatoon 3-Part 4",
  },
];

const News = () => {
  const containerRef = useRef<HTMLElement>(null);
  const slideContainerRef = useRef<HTMLUListElement>(null);
  const slideItemRefs = useRef<Array<any>>([]);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);
  const [gsaps, setGsaps] = useState<Array<any>>([]);

  useEffect(() => {
    const scrollTrigger = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting &&
          entries[0].target.classList.add(styles["start"]);
      },
      { threshold: 0.3 }
    );

    containerRef.current && scrollTrigger.observe(containerRef.current);
  }, []);

  const itemAnimation = (
    el: HTMLUListElement | EventTarget,
    reverse: boolean
  ) => {
    let random = Math.floor(Math.random() * (24 - 8) + 8);

    const timeline = gsap.timeline({
      delay: random * 0.01,
    });

    timeline.from(el, {
      rotate: 0,
      duration: 0,
      ease: Power1.easeInOut,
    });
    for (let i = 0; i < 3; i++) {
      random *= 2 / 3;
      timeline.to(el, {
        rotate: (reverse ? "" : "-") + random + "deg",
        duration: 0.25,
        ease: Power1.easeInOut,
      });
      random *= 2 / 3;
      timeline.to(el, {
        rotate: (reverse ? "-" : "") + random + "deg",
        duration: 0.25,
        ease: Power1.easeInOut,
      });
    }
    timeline.to(el, {
      rotate: 0,
      duration: 0.25,
      ease: Power1.easeInOut,
    });

    setGsaps((prev) => [...prev, timeline]);
  };

  const slideItems = () => {
    const items: Array<JSX.Element> = [];
    NewsList.forEach((news, i) => {
      items.push(
        <li
          key={i}
          ref={(el) => (slideItemRefs.current[i] = el)}
          className={classNames(
            styles.item,
            "relative cursor-pointer flex flex-col justify-around mx-[2%] shrink-0 bg-white w-[46%] px-[5%] pb-[6%] rounded-b-xl origin-top sm:w-[96%] sm:max-w-none sm:pb-[15%]"
          )}
        >
          <div className="absolute bottom-[99%] left-0 right-0 mx-auto w-full origin-bottom">
            <svg
              viewBox="0 0 448 60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M253.96 23.774a4.711 4.711 0 0 1-4.693 4.328h-49.535c-.131 0-.255-.027-.384-.038-2.431-.198-4.348-2.205-4.348-4.68a4.724 4.724 0 0 1 4.732-4.716h18.204c-.006-.106-.017-.21-.017-.315 0-3.452 2.808-6.25 6.27-6.25h.62a6.26 6.26 0 0 1 5.038 2.54 6.194 6.194 0 0 1 1.233 3.71c0 .106-.01.21-.016.315H249.267c2.614 0 4.733 2.111 4.733 4.717 0 .133-.029.258-.04.389M53.446.102H9.693C4.34.102 0 4.437 0 9.782v50.044h448V9.783c0-5.346-4.338-9.68-9.693-9.68H53.445Z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="absolute w-[35%] left-[5%] bottom-[105%] rotate-[-12deg]">
            <Image src={banner3} alt="banner3" />
          </div>
          <div>
            <Image src={news.thumb} alt={news.content} priority />
          </div>

          <p className="text-2xl font-medium mt-[7%] font-sans2 md:text-xl">
            {news.content}
          </p>

          <div
            className={classNames(
              styles["hover-animation"],
              "w-fit mx-auto flex font-sans text-2xl text-center cursor-pointer gap-x-[10px]"
            )}
          >
            <h3>Read</h3>
            <span className={styles.arrow}>{" >"}</span>
          </div>

          <div className="absolute bottom-[3%] w-full left-0 right-0 mx-auto">
            <div className="absolute left-[5%] bottom-0 w-[20%]">
              <Image src={staple2} alt="staple" />
            </div>
            <div className="absolute right-[5%] bottom-0 w-[10%]">
              <Image src={staple1} alt="staple" />
            </div>
          </div>
        </li>
      );
    });
    return items;
  };
  /**
   * 인자로 전달한 수(1, -1)만큼 페이지 수를 더한다.
   */
  const checkAndAddPage = (add: 1 | 0 | -1) => {
    // 업데이트 할 페이지
    let nextPage = page + add;

    // 전체 페이지 길이
    const pageLength =
      innerWidth >= 640 ? NewsList.length / 2 : NewsList.length;

    // 업데이트 할 페이지가 범위 내인지 체크
    if (nextPage < 0) {
      nextPage = 0;
    } else if (nextPage > pageLength) {
      nextPage = pageLength - 1;
    }

    // 업데이트 될 페이지가 양 끝일 경우 버튼 비활성화
    if (nextPage === pageLength - 1) {
      setShowRightButton(false);
    } else setShowRightButton(true);

    if (nextPage === 0) {
      setShowLeftButton(false);
    } else setShowLeftButton(true);

    // 페이지 상태 업데이트
    setPage(nextPage);
  };

  const onRightButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    gsaps.forEach((timeline) => {
      timeline.kill();
    });
    setGsaps([]);

    slideItemRefs.current.forEach((el) => {
      itemAnimation(el, false);
    });

    checkAndAddPage(1);
  };

  const onLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    gsaps.forEach((timeline) => {
      timeline.kill();
    });
    setGsaps([]);

    slideItemRefs.current.forEach((el) => {
      itemAnimation(el, true);
    });

    checkAndAddPage(-1);
  };

  /**
   * 슬라이드 페이지에 맞춰 스크롤 업데이트
   */
  useEffect(() => {
    const slideContainer = slideContainerRef.current;
    if (!slideContainer || !window) return;

    // 페이지 당 너비
    const moveX =
      (innerWidth / 100) *
      (innerWidth < 640 ? 90 : innerWidth < 1024 ? 75 : 60);

    // 이동할 위치, 페이지 당 너비 * 현재 페이지
    const nextX = moveX * page;

    gsap.to(slideContainer, {
      duration: 0.55,
      translateX: -nextX,
      ease: Power4.easeInOut,
    });
  }, [page, innerWidth]);

  /****** 리사이즈 시 width 상태 업데이트 ******/
  useEffect(() => {
    setInnerWidth(window.innerWidth);

    const onWindowResizeListener = (e: Event) => {
      const target = e.target as Window;

      setInnerWidth(target.innerWidth);
    };

    window.addEventListener("resize", _.debounce(onWindowResizeListener, 500));

    return () => {
      window.removeEventListener(
        "resize",
        _.debounce(onWindowResizeListener, 500)
      );
    };
  }, []);

  return (
    <article
      ref={containerRef}
      className="container-none relative mx-auto mt-[50px]"
    >
      <div
        className={classNames(
          styles["container__splat"],
          "absolute left-0 top-0 w-[30%] transition-opacity duration-700 md:left-[-30%] md:w-[50%] sm:hidden"
        )}
      >
        <Image src={splatRed} alt="spalt" />
      </div>
      <div className="relative rotate-[-3deg] mb-[60px] w-fit mx-auto">
        <div className="absolute w-[100%] top-[-20%] right-[-5%] rotate-2">
          <Image src={banner1} alt="banner" />
        </div>
        <div className="absolute w-[100%] bottom-[-40%] left-[-5%]">
          <Image src={banner2} alt="banner" />
        </div>
        <h2 className="relative fooFont py-4 px-14 rounded-lg bg-white text-black text-5xl md:text-3xl">
          NEWS AND UPDATES
        </h2>
      </div>

      <div
        className={classNames(
          styles["hover-animation"],
          "w-fit mx-auto flex gap-x-[10px] font-sans text-white text-3xl text-center cursor-pointer sm:text-2xl sm:gap-x-[5px]"
        )}
      >
        <h3>Peep the ink-formation feed</h3>
        <span className={styles.arrow}>{" >"}</span>
      </div>

      <ul
        ref={slideContainerRef}
        className="pt-[10%] pb-[10%] mb-[-10%] px-[20%] flex w-screen min-w-full md:px-[12.5%] md:pt-[15%] sm:px-[5%] sm:pt-[25%]"
      >
        {slideItems()}
      </ul>

      <div className="absolute pointer-events-none top-[10%] bottom-0 my-auto pt-[10%] w-full flex justify-between items-center md:pt-[20%] sm:pt-[25%]">
        <div className="hover:scale-[1.2] cursor-pointer">
          <button
            onClick={onLeftClick}
            className={classNames(
              styles.button,
              "relative w-[85px] h-[85px] p-[20px] m-[20px] bg-mint rounded-full md:w-[50px] md:h-[50px] md:p-[10px]",
              showLeftButton
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="cursor-pointer">
              <svg
                className="cursor-pointer"
                aria-hidden="true"
                role="img"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#000"
                  d="M35.718 7.193a1.464 1.464 0 0 1-2.058 0l-.856-.853a1.464 1.464 0 0 0-2.058 0l-.9.896a1.464 1.464 0 0 1-2.058 0l-.9-.896a1.464 1.464 0 0 0-2.058 0l-.735.732a1.464 1.464 0 0 1-2.058 0l-.762-.758a1.45 1.45 0 0 1 0-2.05l.9-.896a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.464 1.464 0 0 0-2.058 0L.424 19.139a1.45 1.45 0 0 0 0 2.049L18.89 39.577a1.463 1.463 0 0 0 2.057 0l.9-.896a1.45 1.45 0 0 0 0-2.05l-.9-.895a1.45 1.45 0 0 1 0-2.05l.883-.879a1.464 1.464 0 0 1 2.057 0l.9.897a1.464 1.464 0 0 0 2.058 0l.9-.897a1.464 1.464 0 0 1 2.058 0l.9.897a1.465 1.465 0 0 0 2.058 0l.9-.896a1.463 1.463 0 0 1 2.057 0l.9.896a1.464 1.464 0 0 0 2.057 0l.9-.897a1.45 1.45 0 0 0 0-2.05l-3.857-3.841a1.45 1.45 0 0 1 0-2.05l3.858-3.841a1.45 1.45 0 0 0 0-2.05l-.699-.695-1.13-1.125-1.129-1.125-.9-.896a1.45 1.45 0 0 1 0-2.05l3.858-3.842a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.463 1.463 0 0 0-2.058 0l-.9.896Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        <div className="rotate-180 hover:scale-[1.2] cursor-pointer">
          <button
            onClick={onRightButtonClick}
            className={classNames(
              styles.button,
              "relative w-[85px] h-[85px] p-[20px] m-[20px] bg-mint rounded-full md:w-[50px] md:h-[50px] md:p-[10px]",
              showRightButton
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="cursor-pointer">
              <svg
                className="cursor-pointer"
                aria-hidden="true"
                role="img"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#000"
                  d="M35.718 7.193a1.464 1.464 0 0 1-2.058 0l-.856-.853a1.464 1.464 0 0 0-2.058 0l-.9.896a1.464 1.464 0 0 1-2.058 0l-.9-.896a1.464 1.464 0 0 0-2.058 0l-.735.732a1.464 1.464 0 0 1-2.058 0l-.762-.758a1.45 1.45 0 0 1 0-2.05l.9-.896a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.464 1.464 0 0 0-2.058 0L.424 19.139a1.45 1.45 0 0 0 0 2.049L18.89 39.577a1.463 1.463 0 0 0 2.057 0l.9-.896a1.45 1.45 0 0 0 0-2.05l-.9-.895a1.45 1.45 0 0 1 0-2.05l.883-.879a1.464 1.464 0 0 1 2.057 0l.9.897a1.464 1.464 0 0 0 2.058 0l.9-.897a1.464 1.464 0 0 1 2.058 0l.9.897a1.465 1.465 0 0 0 2.058 0l.9-.896a1.463 1.463 0 0 1 2.057 0l.9.896a1.464 1.464 0 0 0 2.057 0l.9-.897a1.45 1.45 0 0 0 0-2.05l-3.857-3.841a1.45 1.45 0 0 1 0-2.05l3.858-3.841a1.45 1.45 0 0 0 0-2.05l-.699-.695-1.13-1.125-1.129-1.125-.9-.896a1.45 1.45 0 0 1 0-2.05l3.858-3.842a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.463 1.463 0 0 0-2.058 0l-.9.896Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <svg
        viewBox="0 0 1450 76"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1448 40.164-5.381-12.648c-.104-.044-.224-.072-.32-.121-6.709-.01-12.648 1.55-19.052 2.16-1.411.136-2.763.421-4.172.57-2.878.303-4.476-2.039-8.288-.267-1.914.89-4.628 1.513-6.98 2.256-.04.302-.081.608-.125.913-2.037.43-12.258-17.359-13.918-16.76-4.596 1.66-8.302-1.057-13.359-1.313-5.74-.291-6.819-4.109-12.4-4.656-4.544-.444-4.913-1.677-9.893-1.447-3.493.162-3.108-.221-5.866-.87-5.098-1.198-5.707-2.357-2.75-4.748.85-.686-5.565-.968-4.677-1.648-.683-.285-1.363-.573-2.046-.856-.002 0 .298-.13.3-.132-.035-.009-.062-.02-.092-.029-.071.052-.14.107-.21.161-2.892-.04-6.128 3.596-9.023 3.556.09-.565.178-1.127.265-1.689-.737.02-1.472.026-2.203.018l-.06.02c-1.038.743-2.704.905-4.53.916l-.07.023c-.728.303-1.51.585-2.337.841-4.532 1-9.669 1.453-13.787 2.824-1.22.714-2.679-2.867-4.541-2.714-4.487.366-8.67 1.017-11.43 2.711-1.066 2.354-1.574 4.797-7.53 6.376a9.49 9.49 0 0 1-.264.864c-.522 1.879-3.867 2.833-7.668 3.68-3.269.729-7.127 1.146-8.984 2.685l-7.285 3.622.04.017c-1.27 3.109-12.25-.683-16.875 1.74-1.513.792-3.575 1.219-5.885 1.184-12.637-.178-25.77.767-37.593-1.279-1.947-.337-4.115-.83-6.133-.723-9.252.487-10.707 4.244-19.32 3.967-.565-.017-.991-.366-1.48-.562l-2.09-.855c-19.966-1.608-39.3-4.126-59.493-5.293-10.166-.588-22.607 5.163-28.05 2.017a1.763 1.763 0 0 1-.027-.386c-3.028.876-3.449.778-4.208-.888-6.529-.103-13.06-.201-19.582-.322-1.046-.02-2.375-.01-3.03-.248-3.553-1.294-8.056-.934-12.445-.816-.073.24-.177.473-.294.706.051.04.109.081.16.121-4.983 1.916-11.88 2.426-17.162 4.17-2.04.67-3.976-.197-5.953-.372-.835-.234-1.796-.421-2.482-.71-3.181-1.347-6.756-1.054-10.546-.074-3.268 1.492-6.532 2.982-9.8 4.472-2.559 1.924-7.807 2.431-11.636 3.687-6.264 1.467-5.81-11.34-11.542-9.438-3.16 1.049-6.759 1.446-10.295.553-.888-.375-.666-.792-.098-1.222l-.123.02c-.407.185-.768.384-1.052.608-9.3 3.222-15.171 3.714-24.32 1.867-4.519 1.908-18.841 5.403-23.423 7.27-1.764.74-3.965.861-6.207.881-4.79.04-4.219 3.873-8.97 3.798-2.941-.046-5.443.265-8.329.628-6.81.855-17.35-2.455-23.943-3.334-6.54-.873-13.203-1.316-20.343-1.049-5.59.21-7.657 3.389-12.802 2.706-6.69-.885-14.006-1.13-20.213-2.501-8.79-1.078-17.11-2.472-23.757-4.999h.003a36.531 36.531 0 0 1-1.879-.066c-7.616.916-14.767 2.365-21.755 3.918-9.571 2.13-19.292 2.542-28.888 1.484-6.576-.726-12.854-.588-19.383.444-1.736.274-3.793.492-5.016.997-3.13 1.293-6.98 1.806-10.879 2.394-1.723.256-3.9.625-4.779 1.19-5.032 3.224-12.957 3.354-20.54 3.901-9.42 2.005-19.254 2.314-29.036 1.945a135.823 135.823 0 0 0-19.565.648c-3.32.354-6.59.634-9.773.32-6.346-.631-14.874-10.22-21.43-10.214-10.79 1.625-19.826 12.078-30.74 11.473-3.987-.22-4.397-10.263-8.367-9.955-8.01.623-14.535-.1-19.88-2.2-2.864-1.127-6.01-1.45-9.865-.51-3.668.895-7.196.599-10.727.279-2.108-.19-4.112-.539-6.253-.651-4.35-.22-12.34 9.355-16.573 10.438-1.28.329-2.796.487-4.147.775-9.075 1.922-18.416 2.645-28.135 2.196-2.504-.116-5.15.008-7.73.092-8.408.268-16.77.507-25.194.55-9.18.049-18.036.012-26.993-.602-6.575-.452-13.631-.513-20.802.501-4.842.683-10.134.879-15.3.539-3.168-.207-13.708 17.313-17.02 17.33h-.003c-4.981.453-14.926.13-17.619-.567-5.013-1.303-7.146-2.887-4.956-5.071 2.313-2.308 1.428-3.942-2.496-5.457-1.472-.57-2.428-1.351-3.62-2.037-2.68-.25-3.98-1.507-7.707-1.138-3.883.389-6.717-.787-9.83-1.4-4.81-.951-9.495-1.902-15.42-1.576-1.767.095-3.76-.024-5.32-.3-3.782-.669-7.848-.447-11.881-.4l-.047.008c-.47.464-1.302.746-2.512.841-2.245.323-4.492.646-6.737.971-2.894 2.043-8.113 2.74-12.878 3.4-5.376.743-10.193 1.838-15.01 3.014-11.72 3.302-17.351-11.87-30.936-10.56a190.347 190.347 0 0 0-14.992 2.029c-5.532.982-10.322.772-14.396-.54-4.585-1.474-6.835-6.133-13.088-5.926-1.057.035-2.988.816-3.157-.25-.904-5.685-12.162-1.637-18.042-2.622-5.316-.888-10.147-2.078-10.385-4.817-2.57-1.793-9.358.789-13.126-.542-7.36-.96-14.907-1.622-22.93-1.573-2.867.02-5.873.19-8.066-.695-3.52.064-6.234-.541-8.747-1.36-6.518-2.114-10.171 3.178-14.232.098-2.228-1.69-5.997-2.29-11.03-1.498-2.156.34-7.345-6.788-9.483-7.044-8.105-.974-15.633 13.394-24.02 13.409-4.245 1.048-8.265 2.518-12.779 3.054a126.84 126.84 0 0 0-3.886.524l.033.418L0 39.346v36.529h1450l-2-35.711Z"
          fillRule="evenodd"
          fill="#ff505e"
        ></path>
      </svg>
    </article>
  );
};

export default News;
