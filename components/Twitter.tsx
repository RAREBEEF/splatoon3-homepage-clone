import Image from "next/image";
import char from "../public/images/twitter-char.webp";
import graffiti1 from "../public/images/graffiti3.webp";
import graffiti2 from "../public/images/graffiti4.webp";
import frame from "../public/images/twitter-frame.webp";
import graffiti3 from "../public/images/graffiti2.webp";
import Button from "./Button";
import Link from "next/link";

const Twitter = () => {
  return (
    <article className="container-none bg-red mt-[-101px] pt-[50px] pb-[100px]">
      <div className="flex w-full justify-evenly lg:flex-col pr-[100px] md:pr-0">
        <div className="w-[800px] lg:pt-[100px] md:w-[500px] md:mx-auto sm:min-w-[100%]">
          <div className="relative h-full">
            <div className="absolute top-[0%] left-0 right-0 mx-auto w-[60%] lg:top-[-30%] lg:w-[50%] lg:left-[-10%] md:left-0 md:right-auto sm:left-[5%]">
              <Image src={graffiti1} alt="Graffiti" />
            </div>
            <div className="absolute top-[30%] right-[-7%] w-[15%] lg:top-0 md:right-[10%]">
              <Image src={graffiti2} alt="Graffiti" />
            </div>
            <div className="relative top-[40%] right-[-20%] w-[100%] md:left-[10%] md:right-0 md:mx-auto sm:left-[5%]">
              <Image src={char} alt="Octoling" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-y-[35px] items-center md:gap-y-[15px]">
          <div className="absolute w-[500px] right-[-250px] top-[30%] lg:w-[600px] lg:right-[-200px]">
            <Image src={graffiti3} alt="Graffiti" />
          </div>
          <h2 className="relative fooFont text-center text-5xl md:text-3xl">
            <div>SQUID RESEARCH</div>{" "}
            <div className="md:mt-[-5px]">LAB UPDATES</div>
          </h2>

          <div className="relative w-[620px] bg-black rounded-lg sm:w-[90%]">
            <div className="border-[10px] border-white border-solid rounded-lg rounded-b-none">
              <a
                className="twitter-timeline"
                data-height="785"
                data-theme="dark"
                href="https://twitter.com/SplatoonNA?ref_src=twsrc%5Etfw"
              >
                Tweets by SplatoonNA
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
              <div className="absolute top-[100%] left-0 right-0 mx-auto">
                <Image src={frame} alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex mx-auto md:mt-[20px] sm:w-[90%]">
            <Button width="lg">
              <Link href="https://twitter.com/splatoonna">
                <a target="_blank" rel="noreferrer">
                  <div className="absolute flex items-center justify-center gap-x-[10px] pt-1 pb-3 px-10 text-2xl text-white bg-twitter rounded-lg font-sans border-twitter border-[2px] border-solid sm:w-full sm:px-1">
                    <svg
                      aria-hidden="true"
                      role="img"
                      className="w-[20px] h-[20px] translate-y-[4px] sm:w-0"
                      viewBox="0 0 27 22"
                    >
                      <path
                        d="M8.452 21.838c10.141 0 15.688-8.403 15.688-15.689 0-.239 0-.476-.016-.713 1.08-.78 2.01-1.747 2.751-2.854a11.006 11.006 0 0 1-3.167.868A5.533 5.533 0 0 0 26.132.4a11.05 11.05 0 0 1-3.501 1.338 5.52 5.52 0 0 0-9.397 5.03A15.654 15.654 0 0 1 1.87 1.005a5.518 5.518 0 0 0 1.708 7.36 5.473 5.473 0 0 1-2.503-.69v.07a5.516 5.516 0 0 0 4.424 5.406 5.505 5.505 0 0 1-2.49.094 5.52 5.52 0 0 0 5.151 3.83A11.064 11.064 0 0 1 0 19.36a15.61 15.61 0 0 0 8.452 2.472"
                        stroke="none"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Follow these eggeheads {">"}
                  </div>
                  <div className="relative flex items-center justify-center gap-x-[10px] pt-1 pb-3 px-10 text-2xl bg-white rounded-lg font-sans border-white border-[2px] border-solid text-twitter hover:border-twitter transition-all delay-500 hover:delay-200 sm:px-1">
                    <svg
                      aria-hidden="true"
                      role="img"
                      className="w-[20px] h-[20px] translate-y-[4px] sm:w-0"
                      viewBox="0 0 27 22"
                    >
                      <path
                        d="M8.452 21.838c10.141 0 15.688-8.403 15.688-15.689 0-.239 0-.476-.016-.713 1.08-.78 2.01-1.747 2.751-2.854a11.006 11.006 0 0 1-3.167.868A5.533 5.533 0 0 0 26.132.4a11.05 11.05 0 0 1-3.501 1.338 5.52 5.52 0 0 0-9.397 5.03A15.654 15.654 0 0 1 1.87 1.005a5.518 5.518 0 0 0 1.708 7.36 5.473 5.473 0 0 1-2.503-.69v.07a5.516 5.516 0 0 0 4.424 5.406 5.505 5.505 0 0 1-2.49.094 5.52 5.52 0 0 0 5.151 3.83A11.064 11.064 0 0 1 0 19.36a15.61 15.61 0 0 0 8.452 2.472"
                        stroke="none"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Follow these eggeheads {">"}
                  </div>
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Twitter;
