import Matter, { Vector } from "matter-js";
import React, { useEffect, useRef, useState } from "react";
import { line, curveNatural, area } from "d3";
import Button from "./Button";
import facebook from "../public/images/logos/facebook.svg";
import twitter from "../public/images/logos/twitter.svg";
import youtube from "../public/images/logos/youtube.svg";
import instagram from "../public/images/logos/instagram.svg";
import e10 from "../public/images/logos/en-e10.svg";
import privacyCertified from "../public/images/logos/privacy-certified.svg";
import wave from "../public/images/etc/wave.svg";
import sticker1 from "../public/images/etc/sticker1.webp";
import sticker2 from "../public/images/etc/sticker2.webp";
import splatNeonGreen from "../public/images/etc/splat-neonGreen.png";
import splatPurple from "../public/images/etc/splat-purple.png";
import Image from "next/image";
import _ from "lodash";
import useScrollTrigger from "../hooks/useScrollTrigger";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [bodyPos, setBodyPos] = useState<Array<any>>([]);

  const footerRef = useRef<HTMLDivElement>(null);
  const [footerAnimationStart, setFooterAnimationStart] =
    useState<boolean>(false);

  const scrollTrigger = useScrollTrigger();

  useEffect(() => {
    scrollTrigger(footerRef, () => {
      setFooterAnimationStart(true);
    });
  }, [scrollTrigger]);

  const lineGen = area()
    .x((v: any) => v.x)
    .y0((v: any) => v.y)
    .y1(-200)
    .curve(curveNatural);

  // const topGen = line()
  //   .x((v: any) => v.x)
  //   .y((v: any) => v.y)
  //   .curve(curveNatural);

  useEffect(() => {
    const windowResizeListener = () => {
      if (!window) return;
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", _.debounce(windowResizeListener, 500));

    return () => {
      window.removeEventListener(
        "resize",
        _.debounce(windowResizeListener, 500)
      );
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setInnerWidth(window.innerWidth);

    if (innerWidth === 0) return;

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create(),
      world = engine.world;

    engine.gravity.y = 0;

    // create renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: innerWidth,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const group = Body.nextGroup(true);

    const ropeB = Composites.stack(
      0,
      250,
      innerWidth / 10,
      1,
      10,
      10,
      function (x: number, y: number) {
        return Bodies.rectangle(x, y, 1, 1, {
          collisionFilter: { group },
          render: { visible: false },
        });
      }
    );

    Composites.chain(ropeB, 0, 0, 0, 0, {
      stiffness: 0.2,
      length: 0,
      render: { visible: false },
    });

    Composite.add(world, [
      ropeB,
      Constraint.create({
        pointA: { x: -100, y: 300 },
        bodyB: ropeB.bodies[0],
        pointB: { x: 0, y: 0 },
        length: 2,
        stiffness: 0.9,
      }),
      Constraint.create({
        pointA: { x: innerWidth + 100, y: 300 },
        bodyB: ropeB.bodies[ropeB.bodies.length - 1],
        pointB: { x: 0, y: 0 },
        length: 2,
        stiffness: 0.9,
      }),
    ]);

    const mousePos = { x: 0, y: 0 };
    const canvasMouseMoveListener = (e: any) => {
      mousePos.x = e.offsetX;
      mousePos.y = e.offsetY;
      if (mousePos.y > 450 || mousePos.y < 150) {
        bb.collisionFilter.group = group;
      } else {
        bb.collisionFilter.group = undefined;
      }
    };

    const canvasMouseLeaveListener = (e: any) => {
      mousePos.x = 0;
      mousePos.y = 0;
    };

    canvas.addEventListener("mousemove", canvasMouseMoveListener);
    canvas.addEventListener("mouseleave", canvasMouseLeaveListener);

    const bb = Bodies.circle(0, 0, 40, {
      density: 1,
      friction: 0,
      frictionStatic: 1,
      frictionAir: 0,
      label: "mouse",
      render: { visible: false },
    });

    Composite.add(world, bb);

    const mc2 = Constraint.create({
      bodyB: bb,
      pointA: mousePos,
      pointB: Vector.create(),
      stiffness: 0.9,
      damping: 0.7,
      render: { visible: false },
    });

    Composite.add(world, mc2);

    // add mouse control
    // const mouse = Mouse.create(render.canvas);

    // keep the mouse in sync with rendering
    // render.mouse = mouse;

    const posUpdate = () => {
      setBodyPos([...ropeB.bodies.map((b) => b.position)]);
      requestAnimationFrame(posUpdate);
    };

    requestAnimationFrame(posUpdate);

    const windowResizeListener = () => {
      Engine.clear(engine);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Render.stop(render);
    };

    window.addEventListener("resize", _.debounce(windowResizeListener, 400));

    return () => {
      Engine.clear(engine);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Render.stop(render);

      canvas.removeEventListener("mousemove", canvasMouseMoveListener);
      canvas.removeEventListener("mouseleave", canvasMouseLeaveListener);
      window.removeEventListener(
        "resize",
        _.debounce(windowResizeListener, 400)
      );
    };
  }, [innerWidth]);

  return (
    <div className="relative container-none">
      <div className="rotate-180 sm:hidden">
        <canvas
          ref={canvasRef}
          width={innerWidth}
          height="500"
          className="opacity-0 absolute top-0"
        ></canvas>
        <div className="w-full h-[0px] pointer-events-none ">
          <svg className="w-full h-[500px] ">
            <path
              className="water"
              // @ts-ignored
              d={
                bodyPos.length <= 1
                  ? ""
                  : lineGen(bodyPos === undefined ? [[1, 1]] : bodyPos) ===
                    undefined
                  ? ""
                  : lineGen(bodyPos === undefined ? [[1, 1]] : bodyPos)
              }
              fill="#000"
            ></path>
            {/* <path
            fill="#fff"
            v-if="true"
            className="top"
            d={
              topGen(bodyPos === undefined ? [[0, 0]] : bodyPos) === undefined
                ? ""
                : topGen(bodyPos === undefined ? [[0, 0]] : bodyPos)
            }
          ></path> */}
          </svg>
        </div>
      </div>

      <footer className="relative flex flex-col gap-y-[20px] w-full mt-[-200px] pt-[20px] pb-[50px] px-[20%] mx-auto bg-[#000] text-xs text-white text-center md:px-[5%] sm:mt-[-150px]">
        <div>
          <div className="absolute hidden w-[120%] bottom-[100%] left-0 right-[10%] mx-auto mb-[-10px] sm:block">
            <Image src={wave} alt="" />
          </div>
          <div
            className={`absolute w-[100px] left-[8%] top-[10%] rotate-[-12deg] transtion-all duration-700 delay-400 md:hidden ${
              footerAnimationStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={sticker1} alt="Sticker" placeholder="blur" />
          </div>
          <div
            className={`absolute w-[150px] right-[5%] top-[15%] rotate-12 transtion-all duration-700 delay-500 md:hidden ${
              footerAnimationStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={sticker2} alt="Sticker" placeholder="blur" />
          </div>

          <div
            className={`absolute w-[400px] left-[-150px] bottom-[-80px] rotate-12 transtion-all duration-700 md:w-[250px] md:left-[-80px] md:bottom-[-110px] ${
              footerAnimationStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={splatPurple} alt="Splat" placeholder="blur" />
          </div>
          <div
            className={`absolute w-[200px] left-[5%] bottom-[-80px] rotate-[-12deg] transtion-all duration-700 delay-100 md:bottom-[-120px] sm:hidden ${
              footerAnimationStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={splatNeonGreen} alt="Splat" placeholder="blur" />
          </div>

          <div
            className={`absolute w-[400px] right-[-150px] bottom-[-80px] rotate-[180deg] transtion-all duration-700 delay-200 md:w-[200px] md:right-[-100px] sm:bottom-[80px] ${
              footerAnimationStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={splatPurple} alt="Splat" placeholder="blur" />
          </div>
          <div
            className={`absolute w-[250px] right-0 bottom-[100px] rotate-12 md:w-[150px] transtion-all duration-700 delay-300 sm:hidden ${
              footerAnimationStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={splatNeonGreen} alt="Splat" placeholder="blur" />
          </div>
        </div>
        <div className="w-[230px] mx-auto sm:w-full">
          <Button
            bgColor={["purple", "neonGreen"]}
            textColor={["neonGreen", "purple"]}
            borderColor="purple"
          >
            <div>Game updates</div>
          </Button>
        </div>
        <div ref={footerRef} className="relative flex flex-col gap-y-[20px]">
          <p>
            Nintendo Switch Lite plays all games that support handheld mode.
          </p>
          <p>Save Data Cloud compatible with offline play data only.</p>
          <p>
            * Additional games, systems and/or accessories may be required for
            multiplayer mode. Games, systems, and some accessories sold
            separately.
          </p>
          <p>
            ** Any Nintendo Switch Online membership and Nintendo Account
            required for online features. Not available in all countries.
            Internet access required for online features.{" "}
            <a className="underline cursor-pointer">Terms apply.</a> Opens in a
            new window.
          </p>
          <p>*** LAN adapter required; sold separately</p>
        </div>
        <div className="flex justify-center gap-[50px] my-[20px] sm:flex-col">
          <div className="font-semibold text-lg">
            <div className="mb-[10px]">Fllow Nintendo:</div>
            <ul className="flex justify-center gap-[20px]">
              <li className="w-[50px]">
                <a className="cursor-pointer">
                  <Image src={facebook} alt="Facebook" layout="responsive" />
                </a>
              </li>
              <li className="w-[50px]">
                <a className="cursor-pointer">
                  <Image src={twitter} alt="Twitter" layout="responsive" />
                </a>
              </li>
              <li className="w-[50px]">
                <a className="cursor-pointer">
                  <Image src={youtube} alt="Youtube" layout="responsive" />
                </a>
              </li>
              <li className="w-[50px]">
                <a className="cursor-pointer">
                  <Image src={instagram} alt="Youtube" layout="responsive" />
                </a>
              </li>
            </ul>
          </div>

          <div className="h-[90px] bg-[#000] flex justify-center gap-[20px] text-black text-sm">
            <a className="flex bg-white cursor-pointer">
              <div>
                <Image
                  src={e10}
                  alt="en-e10"
                  width="60"
                  height="90"
                  layout="fixed"
                />
              </div>
              <div className="grow flex items-center justify-center px-[10px]">
                Cartoon Violence
              </div>
            </a>
            <a className="cursor-pointer">
              <div>
                <Image
                  src={privacyCertified}
                  alt="privacy certified"
                  width="67"
                  height="90"
                  layout="fixed"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex gap-x-[10px] w-full justify-center">
          <a className="cursor-pointer">Privacy Policy</a>{" "}
          <span className="text-[#000]">|</span>{" "}
          <a className="cursor-pointer">Terms of Use</a>{" "}
          <span className="text-[#000]">|</span>{" "}
          <a className="cursor-pointer">Cookie Preferences</a>
        </div>
        <div>© Nintendo.</div>
      </footer>
    </div>
  );
};

export default Footer;

// /**
//  * 캔버스에 점 생성
//  * @param ctx canvas context
//  * @param x x pos
//  * @param y y
//  * @param i index */
//  class Point {
//   ctx: CanvasRenderingContext2D;
//   x: number;
//   y: number;
//   fieldY: number;
//   speed: number;
//   cur: number;
//   max: number;

//   constructor(
//     ctx: CanvasRenderingContext2D,
//     x: number,
//     y: number,
//     i: number
//   ) {
//     this.ctx = ctx;
//     this.x = x;
//     this.y = y;
//     this.fieldY = y;
//     this.speed = 0.1;
//     this.cur = i;
//     this.max = Math.random() * 20 + 40;
//   }

//   update() {
//     this.cur += this.speed;
//     this.y = this.fieldY + Math.sin(this.cur) * this.max;
//     this.max <= 0 ? (this.max = 0) : (this.max -= 0.2);
//     this.speed <= 0 ? (this.speed = 0) : (this.speed -= 0.0001);
//   }

//   reset() {
//     this.max = Math.random() * 20 + 40;
//     this.speed = 0.1;
//   }
// }

// useEffect(() => {
//   const canvas = canvasRef.current;
//   if (!window || !canvas) return;
//   setInnerWidth(window.innerWidth);

//   if (innerWidth === 0) return;

//   const ctx = canvas.getContext("2d");
//   if (!ctx) return;

//   const pointCount = 10;
//   const pointGap = innerWidth / (pointCount - 1);
//   const points: Array<Point> = [];

//   for (let i = 0; i < pointCount; i++) {
//     points.push(new Point(ctx, pointGap * i, 100, i));
//   }

//   const loop = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     points.forEach((point) => {
//       ctx.beginPath();
//       ctx.arc(point.x, point.y, 30, 0, Math.PI * 2, true);
//       ctx.fill();
//       ctx.closePath();
//       point.update();
//     });
//     requestAnimationFrame(loop);
//   };

//   requestAnimationFrame(loop);

//   canvas.addEventListener("click", () => {
//     points.forEach((point) => {
//       point.reset();
//     });
//   });
// }, [Point, innerWidth]);
