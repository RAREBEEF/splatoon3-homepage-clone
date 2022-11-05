import game from "../public/images/etc/get-game.webp";
import char from "../public/images/characters/character6.webp";
import octo from "../public/images/characters/octo1.webp";
import squid from "../public/images/etc/get-squid.webp";
import smile from "../public/images/etc/get-graffiti.webp";
import splatPurple from "../public/images/etc/splat-purple.png";
import splatNeonGreen from "../public/images/etc/splat-neonGreen.png";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useRef } from "react";
import styles from "./GetTheGame.module.scss";

const GetTheGame = () => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrigger = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting &&
          entries[0].target.classList.add(styles["start"]);
      },
      { threshold: 0.5 }
    );

    triggerRef.current && scrollTrigger.observe(triggerRef.current);
  }, []);

  return (
    <article className="container-none relative flex justify-center sm:flex-col sm:gap-y-[150px] pt-[10%] pb-[30%] sm:mt-[-30%]">
      <div>
        <div className="absolute z-0 w-[40%] top-[-25%] left-[40%] sm:hidden">
          <Image src={splatPurple} alt="splat" />
        </div>
        <div className="absolute z-0 w-[30%] bottom-0 right-[-15%] sm:hidden">
          <Image src={splatNeonGreen} alt="splat" />
        </div>
        <div className="absolute w-[400px] rotate-[25deg] left-[45%] bottom-[-5%] md:w-[250px] sm:w-[150px] sm:left-[50%] sm:bottom-[-2%]">
          <Image src={smile} alt="graffiti" />
        </div>
      </div>
      <section className="relative basis-[60%]">
        <div>
          <div className="absolute z-0 w-[30%] top-[35%] left-0">
            <Image src={splatPurple} alt="splat" />
          </div>
          <div className="absolute z-0 w-[70%] top-[-15%] left-[20%] md:w-[50%] md:left-[25%] md:top-[-10%] sm:w-[40%] sm:top-[10%]">
            <Image src={splatNeonGreen} alt="splat" />
          </div>
          <div className="absolute z-0 top-[110%] left-[40%] sm:top-[80%] sm:left-[20%]">
            <div className="relative z-0 w-[50%] rotate-180">
              <Image src={splatNeonGreen} alt="splat" />
            </div>
            <div className="absolute z-0 w-[30%] top-[40%] left-[25%]">
              <Image src={splatNeonGreen} alt="splat" />
            </div>
          </div>
        </div>
        <div className="absolute w-[35%] left-[20%] top-[50%] rotate-[-6deg] sm:left-[10%]">
          <Image src={game} alt="game pack" priority />
        </div>
        <div className="relative w-[75%] left-[25%] sm:w-[90%] sm:right-[-10%] sm:left-auto">
          <Image src={char} alt="Inkling" priority />
        </div>
        <div className="absolute w-[50%] right-[-15%] top-[60%] sm:right-0 sm:bottom-[-30%]">
          <Image src={octo} alt="Octo" priority />
        </div>
      </section>
      <section className="flex flex-col justify-center basis-[40%] pt-[5%] text-white text-center sm:w-[90%] sm:mx-auto">
        <h2 className="fooFont text-7xl md:text-5xl mb-[20px] rotate-[-4deg]">
          <div className="text-neonGreen text-5xl md:text-3xl mb-[-5px]">
            GET
          </div>
          THE GAME
        </h2>
        <p className="font-sans2 text-xl font-medium md:text-lg mb-[15px]">
          Sink your beak into the Splatoon 3 game today!
        </p>
        <div className="min-w-[180px] mx-auto sm:w-full">
          <Button
            bgColor={["neonGreen", "purple"]}
            textColor={["black", "white"]}
            borderColor="white"
          >
            <div>Buy now</div>
          </Button>
        </div>
      </section>
      <div
        ref={triggerRef}
        className="absolute bottom-0 hidden ml-[20%] sm:block"
      >
        <div className="absolute w-[40%] top-[-10%] left-[-10%]">
          <Image src={splatPurple} alt="splat" />
        </div>
        <div className={styles["squid"]}>
          <Image src={squid} alt="squid" />
        </div>
      </div>
    </article>
  );
};

export default GetTheGame;
