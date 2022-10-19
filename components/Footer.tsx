import Matter, { Vector } from "matter-js";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { line, curveNatural, area } from "d3";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [bodyPos, setBodyPos] = useState<any>();

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

    window.addEventListener("resize", windowResizeListener);

    return () => {
      window.removeEventListener("resize", windowResizeListener);
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
      Mouse = Matter.Mouse,
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
        });
      }
    );

    Composites.chain(ropeB, 0, 0, 0, 0, {
      stiffness: 0.5,
      length: 0,
      render: { type: "line" },
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
      console.log(mousePos.y);
      if (mousePos.y > 320 || mousePos.y < 285) {
        bb.collisionFilter.group = group;
      } else {
        bb.collisionFilter.group = undefined;
      }
    };
    canvas.addEventListener("mousemove", canvasMouseMoveListener);

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
    const mouse = Mouse.create(render.canvas);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

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

    window.addEventListener("resize", windowResizeListener);

    return () => {
      Engine.clear(engine);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Render.stop(render);

      canvas.removeEventListener("mousemove", canvasMouseMoveListener);
      window.removeEventListener("resize", windowResizeListener);
    };
  }, [innerWidth]);

  return (
    <footer className="relative container-none pt-[50%] bg-[url('/images/bg-footer.jpeg')] bg-[length:1200px_800px]">
      <div className="rotate-180">
        <canvas
          ref={canvasRef}
          width={innerWidth}
          height="500"
          className="opacity-0 absolute top-0"
        ></canvas>
        <div className="w-full h-[500px] pointer-events-none ">
          <svg className="w-full h-[500px] ">
            <path
              className="water"
              // @ts-ignored
              d={
                lineGen(bodyPos === undefined ? [[0, 0]] : bodyPos) ===
                undefined
                  ? ""
                  : lineGen(bodyPos === undefined ? [[0, 0]] : bodyPos)
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
      <div className="relative w-full h-[200px] mt-[-560px] mb-[140px]"></div>
      <div className="relative h-[500px]">
        <div className="relative flex w-[240px] sm:w-[90%] mx-auto">
          <Button width="lg">
            <div className="absolute pt-1 pb-3 px-10 text-2xl bg-neonGreen rounded-lg font-sans border-neonGreen border-[2px] border-solid w-full">
              Dive in {">"}
            </div>
            <div className="relative pt-1 pb-3 px-10 text-2xl bg-purple rounded-lg font-sans border-purple border-[2px] border-solid text-white transition-all delay-500 hover:border-white hover:delay-200">
              Dive in {">"}
            </div>
          </Button>
        </div>
        <div className="w-full bg-[#000] h-[500px] mt-[100px]"></div>
      </div>
    </footer>
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
