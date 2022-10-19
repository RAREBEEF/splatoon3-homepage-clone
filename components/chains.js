import Matter from "matter-js";

var Example = Example || {};

Example.chains = function (canvas) {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies,
    innerWidth = window.innerWidth;

  // create engine
  const engine = Engine.create(),
    world = engine.world;

  engine.gravity.y = 0.1;

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

  const ropeB = Composites.stack(0, 250, 60, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 10, 10, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeB, 0, 0, 0, 0, {
    stiffness: 0.5,
    length: 0,
    // render: { type: "ball" },
    render: { type: "line" },
  });

  Composite.add(world, [
    ropeB,
    Constraint.create({
      pointA: { x: -20, y: 300 },
      bodyB: ropeB.bodies[0],
      pointB: { x: 0, y: 0 },
      length: 2,
      stiffness: 0.9,
    }),
    Constraint.create({
      pointA: { x: innerWidth + 20, y: 300 },
      bodyB: ropeB.bodies[ropeB.bodies.length - 1],
      pointB: { x: 0, y: 0 },
      length: 2,
      stiffness: 0.9,
    }),
  ]);

  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 1,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
  };
};

Example.chains.title = "Chains";
Example.chains.for = ">=0.14.2";

if (typeof module !== "undefined") {
  module.exports = Example.chains;
}

export default Example.chains;
