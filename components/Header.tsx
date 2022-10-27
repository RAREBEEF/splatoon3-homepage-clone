import Image from "next/image";
import character1 from "../public/images/characters/character1.webp";
import character2 from "../public/images/characters/character2.webp";
import character3 from "../public/images/characters/character3.webp";
import character4 from "../public/images/characters/character4.webp";
import effect from "../public/images/etc/header-effect.webp";
import splat from "../public/images/etc/splat-black.png";
import splatRed from "../public/images/etc/splat-red.png";
import logo from "../public/images/logos/logo.webp";
import tape from "../public/images/etc/header-tape.webp";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Button from "./Button";

const Header = () => {
  return (
    <header className="container-none relative">
      <div className="absolute left-0 bottom-[-30%] w-[30%] md:hidden">
        <Image src={splatRed} alt="splat" />
      </div>
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/images/bgs/header-bg.webp"
          type="image/webp"
          width="1947"
          height="952"
        />
        <source
          srcSet="/images/bgs/header-bg-responsive.webp"
          width="901"
          height="1151"
          type="image/webp"
        />
        <img
          className="relative md:aspect-[4/3] md:object-cover sm:aspect-auto"
          src="/images/bgs/header-bg.webp"
          alt="spaltoon world"
        />
      </picture>

      <div
        className={classNames(
          styles.character1,
          "absolute w-[30%] top-[45%] left-[75%] md:top-[55%] md:left-[65%] sm:top-[40%] sm:left-[80%]"
        )}
      >
        <Image src={character1} alt="Inkling" />
      </div>
      <div
        className={classNames(
          styles.character2,
          "absolute w-[15%] top-[40%] left-[-3%] md:top-[45%] sm:w-[25%] sm:top-[25%]"
        )}
      >
        <Image src={character2} alt="Octoling" />
      </div>
      <div
        className={classNames(
          styles.character3,
          "absolute w-[20%] top-[50%] left-[28%] md:top-[55%] md:left-[27%] sm:w-[35%] sm:top-[35%] sm:left-[35%]"
        )}
      >
        <Image src={character3} alt="Octoling" />
      </div>
      <div
        className={classNames(
          styles.character4,
          "absolute w-[75%] top-[1%] left-[7%] md:top-[20%] sm:w-[110%] sm:top-[6%] sm:left-[10%]"
        )}
      >
        <Image src={character4} alt="Inkling" />
      </div>

      <div
        className={classNames(
          styles.effect,
          "absolute w-[50%] top-[1%] left-[-10%] sm:w-[70%]"
        )}
      >
        <Image src={effect} alt="Paint effect" />
      </div>

      <div className="absolute top-0 right-[5%] my-auto right-0 w-[630px] h-[550px] md:w-[400px] md:h-[400px] md:bottom-auto sm:w-[75%] sm:h-[50%] sm:bottom-0 sm:top-auto sm:left-0 sm:mx-auto">
        <div
          className={classNames(
            styles.splat1,
            "w-[80%] absolute bottom-[10%] right-0 sm:w-[50%] sm:bottom-[-5%]"
          )}
        >
          <Image src={splat} alt="splat" />
        </div>
        <div
          className={classNames(
            styles.splat2,
            "w-[50%] absolute bottom-[10%] left-0 sm:w-[40%] sm:bottom-[-5%]"
          )}
        >
          <Image src={splat} alt="splat" />
        </div>
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
            "absolute bottom-[35%] left-0 right-0 mx-auto sm:bottom-[20%]"
          )}
        >
          <div className="absolute w-[250px] top-[65%] bottom-0 left-0 right-0 m-auto rotate-3 sm:w-[270px] sm:top-[40%]">
            <Image src={tape} alt="Tape" />
          </div>
          <div className="max-w-[200px] mx-auto sm:max-w-[300px]">
            <Button
              bgColor={["neonGreen", "purple"]}
              textColor={["black", "white"]}
              borderColor={"white"}
            >
              <div>Buy now</div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
