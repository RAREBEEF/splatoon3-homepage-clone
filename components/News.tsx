import styles from "./News.module.scss";
import classNames from "classnames";
import banner1 from "../public/images/banner-news1.webp";
import banner2 from "../public/images/banner-news2.webp";
import news1 from "../public/images/news1.png";
import news2 from "../public/images/news2.jpeg";
import news3 from "../public/images/news3.png";
import news4 from "../public/images/news4.jpeg";
import news5to6 from "../public/images/news5.jpeg";
import Image, { StaticImageData } from "next/image";
import statple1 from "../public/images/staple-news2.webp";
import statple2 from "../public/images/staple-news.webp";
import sticker from "../public/images/sticker-news.webp";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap, Power1 } from "gsap";
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
  const slideContainerRef = useRef<HTMLUListElement>(null);
  const slideItemRefs = useRef<Array<any>>([]);
  const [page, setPage] = useState<number>(0);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);

  const itemAnimation = (
    el: HTMLUListElement | EventTarget,
    reverse: boolean
  ) => {
    let random = Math.floor(Math.random() * (24 - 8) + 8);

    const timeline = gsap.timeline({
      delay: random * 0.01,
    });

    timeline.to(el, {
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
            <Image src={sticker} alt="sticker" />
          </div>
          <div className="">
            <Image src={news.thumb} alt={news.content} />
          </div>

          <p className={classNames(styles.Montserrat, "text-lg mt-[7%]")}>
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
              <Image src={statple1} alt="staple" />
            </div>
            <div className="absolute right-[5%] bottom-0 w-[10%]">
              <Image src={statple2} alt="staple" />
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
  const checkAndAddPage = useCallback(
    (add: 1 | 0 | -1) => {
      // 업데이트 할 페이지
      let nextPage = page + add;

      // 전체 페이지 길이
      const pageLength =
        window.innerWidth >= 640 ? NewsList.length / 2 : NewsList.length;

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
    },
    [page]
  );

  const onRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkAndAddPage(1);
  };

  const onLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkAndAddPage(-1);
  };

  /**
   * 슬라이드 페이지에 맞춰 스크롤 업데이트
   */
  const scrollUpdate = useCallback(() => {
    const slideContainer = slideContainerRef.current;
    if (!slideContainer || !window) return;

    const innerWidth = window.innerWidth;
    const currentX = slideContainer.scrollLeft;
    const moveX =
      (window.innerWidth / 100) *
      (innerWidth < 640 ? 90 : innerWidth < 1024 ? 75 : 60);

    const nextX = moveX * page;

    slideContainer.scrollTo({
      left: nextX,
      behavior: "smooth",
    });

    slideItemRefs.current.forEach((el) => {
      itemAnimation(el, currentX > nextX);
    });
  }, [page]);

  /****** 스와이프 페이지 변경 시 scrollUpdate 호출 ******/
  useEffect(() => {
    scrollUpdate();
  }, [scrollUpdate]);

  /****** 리사이즈 시 스와이프 재정렬 ******/
  useEffect(() => {
    const onWindowResizeListener = () => {
      checkAndAddPage(0);
      scrollUpdate();
    };

    window.addEventListener("resize", onWindowResizeListener);

    return () => {
      window.removeEventListener("resize", onWindowResizeListener);
    };
  }, [checkAndAddPage, page, scrollUpdate]);

  return (
    <article className="container-none relative mx-auto mt-[-100px]">
      <div className="rotate-[-3deg] mb-[60px] w-fit mx-auto">
        <div className="absolute w-[100%] top-[-20%] right-[-5%] rotate-2">
          <Image src={banner1} alt="banner" />
        </div>
        <div className="absolute w-[100%] bottom-[-40%] left-[-5%]">
          <Image src={banner2} alt="banner" />
        </div>
        <h2
          className={classNames(
            styles.fooFont,
            "relative py-4 px-14 rounded-lg bg-white text-black text-5xl md:text-3xl"
          )}
        >
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
        className="pt-[10%] pb-[10%] px-[20%] flex overflow-hidden w-screen min-w-[320px] md:px-[12.5%] md:pt-[15%] sm:px-[5%] sm:pt-[25%]"
      >
        {slideItems()}
      </ul>

      <div className="absolute pointer-events-none top-0 bottom-0 my-auto pt-[10%] w-full flex justify-between items-center md:pt-[20%] sm:pt-[25%]">
        <div className="hover:scale-[1.2]">
          <button
            onClick={onLeftClick}
            className={classNames(
              styles.button,
              "relative w-[85px] h-[85px] p-[20px] m-[20px] bg-mint rounded-full md:w-[50px] md:h-[50px] md:p-[10px]",
              showLeftButton
                ? "opacity-100 pointer-events-auto"
                : "pointer-events-none opacity-0 cursor-default"
            )}
          >
            <div>
              <svg aria-hidden="true" role="img" viewBox="0 0 40 40">
                <path
                  fill="#000"
                  d="M35.718 7.193a1.464 1.464 0 0 1-2.058 0l-.856-.853a1.464 1.464 0 0 0-2.058 0l-.9.896a1.464 1.464 0 0 1-2.058 0l-.9-.896a1.464 1.464 0 0 0-2.058 0l-.735.732a1.464 1.464 0 0 1-2.058 0l-.762-.758a1.45 1.45 0 0 1 0-2.05l.9-.896a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.464 1.464 0 0 0-2.058 0L.424 19.139a1.45 1.45 0 0 0 0 2.049L18.89 39.577a1.463 1.463 0 0 0 2.057 0l.9-.896a1.45 1.45 0 0 0 0-2.05l-.9-.895a1.45 1.45 0 0 1 0-2.05l.883-.879a1.464 1.464 0 0 1 2.057 0l.9.897a1.464 1.464 0 0 0 2.058 0l.9-.897a1.464 1.464 0 0 1 2.058 0l.9.897a1.465 1.465 0 0 0 2.058 0l.9-.896a1.463 1.463 0 0 1 2.057 0l.9.896a1.464 1.464 0 0 0 2.057 0l.9-.897a1.45 1.45 0 0 0 0-2.05l-3.857-3.841a1.45 1.45 0 0 1 0-2.05l3.858-3.841a1.45 1.45 0 0 0 0-2.05l-.699-.695-1.13-1.125-1.129-1.125-.9-.896a1.45 1.45 0 0 1 0-2.05l3.858-3.842a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.463 1.463 0 0 0-2.058 0l-.9.896Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        <div className="rotate-180 hover:scale-[1.2]">
          <button
            onClick={onRightClick}
            className={classNames(
              styles.button,
              "relative w-[85px] h-[85px] p-[20px] m-[20px] bg-mint rounded-full md:w-[50px] md:h-[50px] md:p-[10px]",
              showRightButton
                ? "opacity-100 pointer-events-auto"
                : "pointer-events-none opacity-0 cursor-default"
            )}
          >
            <div>
              <svg aria-hidden="true" role="img" viewBox="0 0 40 40">
                <path
                  fill="#000"
                  d="M35.718 7.193a1.464 1.464 0 0 1-2.058 0l-.856-.853a1.464 1.464 0 0 0-2.058 0l-.9.896a1.464 1.464 0 0 1-2.058 0l-.9-.896a1.464 1.464 0 0 0-2.058 0l-.735.732a1.464 1.464 0 0 1-2.058 0l-.762-.758a1.45 1.45 0 0 1 0-2.05l.9-.896a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.464 1.464 0 0 0-2.058 0L.424 19.139a1.45 1.45 0 0 0 0 2.049L18.89 39.577a1.463 1.463 0 0 0 2.057 0l.9-.896a1.45 1.45 0 0 0 0-2.05l-.9-.895a1.45 1.45 0 0 1 0-2.05l.883-.879a1.464 1.464 0 0 1 2.057 0l.9.897a1.464 1.464 0 0 0 2.058 0l.9-.897a1.464 1.464 0 0 1 2.058 0l.9.897a1.465 1.465 0 0 0 2.058 0l.9-.896a1.463 1.463 0 0 1 2.057 0l.9.896a1.464 1.464 0 0 0 2.057 0l.9-.897a1.45 1.45 0 0 0 0-2.05l-3.857-3.841a1.45 1.45 0 0 1 0-2.05l3.858-3.841a1.45 1.45 0 0 0 0-2.05l-.699-.695-1.13-1.125-1.129-1.125-.9-.896a1.45 1.45 0 0 1 0-2.05l3.858-3.842a1.45 1.45 0 0 0 0-2.049l-.9-.896a1.463 1.463 0 0 0-2.058 0l-.9.896Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default News;
