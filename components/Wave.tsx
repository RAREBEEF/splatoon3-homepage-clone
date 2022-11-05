import { useEffect, useRef, useState } from "react";
import Matter, { Vector } from "matter-js";
import { curveNatural, area } from "d3";
import _ from "lodash";

const Wave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [bodyPos, setBodyPos] = useState<Array<any>>([]);

  /**
   * canvas 로프의 bodies 포지션에 따라 svg path 생성
   */
  const lineGen = area()
    .x((v: any) => v.x)
    .y0((v: any) => v.y)
    .y1(-200)
    .curve(curveNatural);

  useEffect(() => {
    setInnerWidth(window.innerWidth);

    if (innerWidth <= 640 || !canvasRef.current) return;

    //
    // 기본 설정
    //

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      Bodies = Matter.Bodies,
      mousePos = { x: 0, y: 0 },
      canvas = canvasRef.current;

    // 엔진 생성
    const engine = Engine.create(),
      world = engine.world;

    // 중력 설정
    engine.gravity.y = 0;

    // 렌더러 생성
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: innerWidth,
      },
    });
    Render.run(render);

    // 러너 생성
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 바디 그룹
    const group = Body.nextGroup(true);

    //
    // 체인 생성
    //

    // 사각형 스택 생성
    const rope = Composites.stack(
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

    // 사각형 스택을 체인으로 연결
    Composites.chain(rope, 0, 0, 0, 0, {
      stiffness: 0.2,
      length: 0,
      render: { visible: false },
    });

    // 체인 양 끝 고정
    Composite.add(world, [
      rope,
      Constraint.create({
        pointA: { x: -100, y: 300 },
        bodyB: rope.bodies[0],
        pointB: { x: 0, y: 0 },
        length: 2,
        stiffness: 0.9,
      }),
      Constraint.create({
        pointA: { x: innerWidth + 100, y: 300 },
        bodyB: rope.bodies[rope.bodies.length - 1],
        pointB: { x: 0, y: 0 },
        length: 2,
        stiffness: 0.9,
      }),
    ]);

    //
    // 마우스 인터렉션 추가
    //

    // 원 생성
    const bb = Bodies.circle(0, 0, 40, {
      density: 1,
      friction: 0,
      frictionStatic: 1,
      frictionAir: 0,
      label: "mouse",
      render: { visible: false },
    });

    // 원 위치를 마우스 위치와 동기화
    const mc2 = Constraint.create({
      bodyB: bb,
      pointA: mousePos,
      pointB: Vector.create(),
      stiffness: 0.9,
      damping: 0.7,
      render: { visible: false },
    });

    Composite.add(world, bb);
    Composite.add(world, mc2);


    // 
    // 매 프레임마다 상태 업데이트
    // 
    const posUpdate = () => {
      setBodyPos([...rope.bodies.map((b) => b.position)]);
      requestAnimationFrame(posUpdate);
    };

    requestAnimationFrame(posUpdate);

    // 
    // 필요한 이벤트 리스너 추가
    // 
    // 마우스 움직일 때 mousePos 업데이트
    const canvasMouseMoveListener = (e: any) => {
      mousePos.x = e.offsetX;
      mousePos.y = e.offsetY;
      if (mousePos.y > 400 || mousePos.y < 200) {
        bb.collisionFilter.group = group;
      } else {
        bb.collisionFilter.group = undefined;
      }
    };

    // 마우스가 캔버스를 떠나면 마우스 위치 초기화
    const canvasMouseLeaveListener = () => {
      mousePos.x = 0;
      mousePos.y = 0;
    };

    // 리사이즈 시 클린업
    const windowResizeListener = () => {
      Engine.clear(engine);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Render.stop(render);

      if (!window) return;
      setInnerWidth(window.innerWidth);
    };

    canvas.addEventListener("mousemove", canvasMouseMoveListener);
    canvas.addEventListener("mouseleave", canvasMouseLeaveListener);
    window.addEventListener("resize", _.debounce(windowResizeListener, 500));

    return () => {
      Engine.clear(engine);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Render.stop(render);

      canvas.removeEventListener("mousemove", canvasMouseMoveListener);
      canvas.removeEventListener("mouseleave", canvasMouseLeaveListener);
      window.removeEventListener(
        "resize",
        _.debounce(windowResizeListener, 500)
      );
    };
  }, [innerWidth]);

  return (
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
        </svg>
      </div>
    </div>
  );
};

export default Wave;
