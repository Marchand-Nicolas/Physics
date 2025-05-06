import React, { useRef, useEffect } from "react";
import render from "../utils/render";
import simulate from "../utils/simulate";
import Element from "../types/object";

export default function Canvas({
  maxX,
  maxY,
  gravity,
  resolution,
  spawnDelay,
  defaultXVelocity,
  defaultYVelocity,
  setObjects,
  ...props
}: {
  maxX: number;
  maxY: number;
  gravity: number;
  resolution: number;
  spawnDelay: number;
  defaultXVelocity: number;
  defaultYVelocity: number;
  setObjects: React.Dispatch<React.SetStateAction<Element[]>>;
  [key: string]: any;
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current === null) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext("2d");

    const types = {
      "0": {
        color: "blue",
        radius: 10,
        mass: 10,
        friction: 0.9,
        restitution: 0.5,
        sameTypeAttractionMultiplier: 0.1,
        differentTypeAttractionMultiplier: -0.1,
      },
      "1": {
        color: "red",
        radius: 10,
        mass: 100,
        friction: 0.9,
        restitution: 0.5,
        sameTypeAttractionMultiplier: 0.1,
        differentTypeAttractionMultiplier: -0.1,
      },
      "2": {
        color: "green",
        radius: 10,
        mass: 2,
        friction: 0.9,
        restitution: 0.5,
        sameTypeAttractionMultiplier: 0.1,
        differentTypeAttractionMultiplier: -0.1,
      },
    };

    let time = 0;

    const typeList = Object.keys(types);

    const tick = setInterval(() => {
      setObjects((prev: Element[]) => {
        const objs = [...prev];
        if (!(time % spawnDelay))
          objs.push({
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY),
            radius: 10,
            type: Math.floor(Math.random() * typeList.length).toString(),
            velocity: {
              x: Math.floor(Math.random() * defaultXVelocity),
              y: Math.floor(Math.random() * defaultYVelocity),
            },
            acceleration: { x: 0, y: 0 },
          });
        simulate(resolution, gravity, maxX, maxY, objs, types);
        render(resolution, context, objs, types);
        return objs;
      });
      time++;
    }, 1000 / 60);

    return () => clearInterval(tick);
  }, [
    canvasRef,
    maxX,
    maxY,
    gravity,
    resolution,
    spawnDelay,
    defaultXVelocity,
    defaultYVelocity,
    setObjects,
  ]);

  return <canvas width={maxX} height={maxY + 10} ref={canvasRef} {...props} />;
}
