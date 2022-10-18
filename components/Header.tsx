import Image from "next/image";
import char1 from "../public/images/header-char1.webp";
import char2 from "../public/images/header-char2.webp";
import char3 from "../public/images/header-char3.webp";
import char4 from "../public/images/header-char4.webp";
import effect from "../public/images/header-effect.webp";
import logo from "../public/images/logo.webp";
import tape from "../public/images/header-tape.webp";
import Button from "./Button";
import classNames from "classnames";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="container-none relative overflow-hidden">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/images/header-bg.webp"
          type="image/webp"
          width="1947"
          height="952"
        />
        <source
          srcSet="/images/header-bg-responsive.webp"
          width="901"
          height="1151"
          type="image/webp"
        />
        <img
          className="md:aspect-[4/3] md:object-cover sm:aspect-auto"
          src="/images/header-bg.webp"
          alt="spaltoon world"
        />
      </picture>

      <div
        className={classNames(
          styles.char1,
          "absolute w-[30%] top-[45%] left-[75%] md:top-[55%] md:left-[65%] sm:top-[40%] sm:left-[80%]"
        )}
      >
        <Image src={char1} alt="Splatoon character" />
      </div>
      <div
        className={classNames(
          styles.char2,
          "absolute w-[15%] top-[40%] left-[-3%] md:top-[45%] sm:w-[25%] sm:top-[25%]"
        )}
      >
        <Image src={char2} alt="Splatoon character" />
      </div>
      <div
        className={classNames(
          styles.char3,
          "absolute w-[20%] top-[50%] left-[28%] md:top-[55%] md:left-[27%] sm:w-[35%] sm:top-[35%] sm:left-[35%]"
        )}
      >
        <Image src={char3} alt="Splatoon character" />
      </div>
      <div
        className={classNames(
          styles.char4,
          "absolute w-[75%] top-[1%] left-[7%] md:top-[20%] sm:w-[110%] sm:top-[6%] sm:left-[10%]"
        )}
      >
        <Image src={char4} alt="Splatoon character" />
      </div>

      <div
        className={classNames(
          styles.effect,
          "absolute w-[50%] top-[1%] left-[-10%] sm:w-[70%]"
        )}
      >
        <Image src={effect} alt="Paint effect" />
      </div>

      <div className="absolute top-0 bottom-0 my-auto right-0 w-[550px] h-[550px] md:w-[400px] md:h-[400px] md:bottom-auto sm:w-[75%] sm:h-[50%] sm:bottom-0 sm:top-auto sm:left-0 sm:mx-auto">
        <div
          className={classNames(
            styles.logo,
            "absolute w-full top-[5%] sm:top-0"
          )}
        >
          <Image src={logo} alt="Splatoon 3" />
        </div>

        <div
          className={classNames(
            styles.button,
            "absolute bottom-[35%] left-0 right-0 mx-auto sm:bottom-[30%]"
          )}
        >
          <div className="absolute w-[250px] top-[65%] bottom-0 left-0 right-0 m-auto rotate-3 sm:w-[270px]">
            <Image src={tape} alt="Tape" />
          </div>
          <Button width="sm">
            <div className="absolute w-[200px] h-fit top-[30%] bottom-0 right-0 left-0 mx-auto my-auto pt-1 pb-3 px-2 text-2xl bg-neonGreen rounded-lg font-sans border-neonGreen border-[2px] border-solid sm:w-[300px]">
              Buy <span>now {">"}</span>
            </div>
            <div className="absolute w-[200px] h-fit top-[30%] bottom-0 right-0 left-0 my-auto mx-auto pt-1 pb-3 px-2 text-2xl bg-purple text-white rounded-lg font-sans border-purple border-[2px] border-solid hover:border-white transition-all delay-500 hover:delay-200 sm:w-[300px]">
              Buy <span>now {">"}</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
