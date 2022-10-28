import Image from "next/image";
import thumb from "../public/images/etc/trailer-thumb.webp";
import tape1 from "../public/images/etc/tape1.webp";
import tape2 from "../public/images/etc/tape2.webp";
import left from "../public/images/etc/trailer-left.svg";
import right from "../public/images/etc/trailer-right.svg";
import play from "../public/images/icons/play.svg";
import styles from "./Trailer.module.scss";
import classNames from "classnames";

const Trailer = () => {
  return (
    <div className="container-none relative mx-auto mx-[20%] mt-[-150px] md:mx-[15%] relative sm:mx-auto">
      <div className="w-[90%] bg-white border-[10px] border-white rounded-sm mx-auto rotate-2">
        <div>
          <Image src={thumb} alt="trailer" priority />
        </div>
      </div>

      <div className="absolute w-[15%] top-[-5%] left-0 rotate-[-30deg]">
        <Image src={tape1} alt="tape" />
      </div>

      <div className="absolute w-[15%] bottom-0 right-[3%] rotate-[-30deg]">
        <Image src={tape2} alt="tape" />
      </div>

      <h2
        className={classNames(
          "absolute flex items-center h-[70px] w-fit text-center bg-red font-sans text-4xl left-0 right-0 top-[-10%] mx-auto px-10 rotate-[-6deg] md:text-3xl sm:text-2xl sm:h-[50px]"
        )}
      >
        <div className="absolute right-[100%] translate-x-[1px] w-[34px] sm:w-[25px]">
          <Image src={left} alt="" layout="responsive" />
        </div>
        <span className="mb-3 sm:mb-2">Watch the trailer</span>
        <div className="absolute left-[100%] translate-x-[-1px] w-[32px] sm:w-[23px]">
          <Image src={right} alt="" layout="responsive" />
        </div>
      </h2>

      <button
        className={classNames(
          styles.play,
          "absolute w-[30%] h-[100%] left-0 right-0 top-0 bottom-0 m-auto"
        )}
      >
        <div className={styles.blob}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="black"
              transform="translate(100 100)"
              d="M55.2,-57.3C67.9,-42.4,72.3,-21.2,70.6,-1.7C68.9,17.8,61.1,35.5,48.3,49.7C35.5,63.9,17.8,74.5,0.6,73.9C-16.6,73.3,-33.2,61.5,-48.7,47.4C-64.3,33.2,-78.9,16.6,-80.5,-1.6C-82,-19.7,-70.6,-39.4,-55,-54.3C-39.4,-69.2,-19.7,-79.3,0.7,-80C21.2,-80.7,42.4,-72.1,55.2,-57.3Z"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M55.2,-57.3C67.9,-42.4,72.3,-21.2,70.6,-1.7C68.9,17.8,61.1,35.5,48.3,49.7C35.5,63.9,17.8,74.5,0.6,73.9C-16.6,73.3,-33.2,61.5,-48.7,47.4C-64.3,33.2,-78.9,16.6,-80.5,-1.6C-82,-19.7,-70.6,-39.4,-55,-54.3C-39.4,-69.2,-19.7,-79.3,0.7,-80C21.2,-80.7,42.4,-72.1,55.2,-57.3Z;M50.6,-54.1C63.6,-37.6,70.8,-18.8,70,-0.7C69.3,17.3,60.7,34.7,47.7,45.4C34.7,56.2,17.3,60.3,-1.5,61.8C-20.3,63.3,-40.5,62,-50.9,51.3C-61.4,40.5,-62,20.3,-62.7,-0.7C-63.4,-21.6,-64.1,-43.3,-53.7,-59.7C-43.3,-76.2,-21.6,-87.6,-1.4,-86.1C18.8,-84.7,37.6,-70.6,50.6,-54.1Z;M61.2,-62.7C75.7,-46.6,81.5,-23.3,80.2,-1.4C78.8,20.6,70.2,41.1,55.7,56.4C41.1,71.6,20.6,81.5,-1,82.6C-22.6,83.6,-45.1,75.6,-61.4,60.4C-77.7,45.1,-87.7,22.6,-85,2.7C-82.3,-17.2,-66.9,-34.4,-50.7,-50.5C-34.4,-66.5,-17.2,-81.5,3.1,-84.5C23.3,-87.6,46.6,-78.8,61.2,-62.7Z;M55,-57.2C67.8,-42.2,72.2,-21.1,73.4,1.2C74.6,23.5,72.6,47.1,59.9,63.7C47.1,80.3,23.5,90,4,86C-15.5,82,-31,64.3,-45,47.7C-58.9,31,-71.2,15.5,-74.5,-3.2C-77.7,-22,-71.8,-44,-57.9,-58.9C-44,-73.8,-22,-81.7,-0.4,-81.2C21.1,-80.8,42.2,-72.1,55,-57.2Z;M53.8,-53C66.9,-40.7,72.8,-20.3,73.8,0.9C74.7,22.2,70.6,44.3,57.5,56.6C44.3,68.9,22.2,71.2,2.4,68.9C-17.5,66.5,-34.9,59.5,-50.4,47.2C-65.9,34.9,-79.4,17.5,-79.9,-0.5C-80.5,-18.5,-68,-37.1,-52.6,-49.4C-37.1,-61.8,-18.5,-68,0.9,-68.9C20.3,-69.8,40.7,-65.4,53.8,-53Z;M55.2,-57.3C67.9,-42.4,72.3,-21.2,70.6,-1.7C68.9,17.8,61.1,35.5,48.3,49.7C35.5,63.9,17.8,74.5,0.6,73.9C-16.6,73.3,-33.2,61.5,-48.7,47.4C-64.3,33.2,-78.9,16.6,-80.5,-1.6C-82,-19.7,-70.6,-39.4,-55,-54.3C-39.4,-69.2,-19.7,-79.3,0.7,-80C21.2,-80.7,42.4,-72.1,55.2,-57.3Z"
              />
            </path>
          </svg>
        </div>

        <div
          className={classNames(
            styles.icon,
            "absolute w-[25%] h-[25%] top-[5%] bottom-0 left-0 right-0 m-auto"
          )}
        >
          <Image src={play} alt="play" />
        </div>
      </button>
    </div>
  );
};

export default Trailer;
