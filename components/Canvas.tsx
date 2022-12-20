import React, { useRef, useEffect } from 'react'
import render from '../utils/render';
import simulate from '../utils/simulate';

export default function Canvas({ maxX, maxY, gravity, resolution, spawnDelay, ...props }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current === null) return;
        const canvas:HTMLCanvasElement = canvasRef.current
        const context = canvas.getContext('2d')
            
            const objects:any = [
                /*{ 
                    x: 200,
                    y: 0,
                    type: '0',
                    radius: 10,
                    velocity: { x: 0, y: 0 },
                    acceleration: { x: 0, y: 0 },
                },
                {
                    x: 200,
                    y: 50,
                    type: '0',
                    velocity: { x: 0, y: 0 },
                    acceleration: { x: 0, y: 0 },
                },
                {
                    x: 0,
                    y: 0,
                    type: '1',
                    velocity: { x: 20, y: 0 },
                    acceleration: { x: 0, y: 0 },
                },
                {
                    x: maxX,
                    y: 0,
                    type: '2',
                    velocity: { x: -20, y: 0 },
                    acceleration: { x: 0, y: 0 },
                },*/
            ]

            const types = {
                '0': {
                    color: 'blue',
                    radius: 10,
                    mass: 10,
                    friction: 0.9,
                    restitution: 0.5,
                    sameTypeAttractionMultiplier: 0.1,
                    differentTypeAttractionMultiplier: -0.1,
                },
                '1': {
                    color: 'red',
                    radius: 10,
                    mass: 100,
                    friction: 0.9,
                    restitution: 0.5,
                    sameTypeAttractionMultiplier: 0.1,
                    differentTypeAttractionMultiplier: -0.1,
                },
                '2': {
                    color: 'green',
                    radius: 10,
                    mass: 2,
                    friction: 0.9,
                    restitution: 0.5,
                    sameTypeAttractionMultiplier: 0.1,
                    differentTypeAttractionMultiplier: -0.1,
                }
            }

            let time = 0

            const typeList = Object.keys(types)

            const tick = setInterval(() => {
                if (!(time % spawnDelay)) objects.push({
                    x: 0,
                    y: 0,
                    radius: 10,
                    type: Math.floor(Math.random()*typeList.length).toString(),
                    velocity: { x: 20, y: 0 },
                    acceleration: { x: 0, y: 0 },
                })
                simulate(resolution, gravity, maxX, maxY, objects, types)
                render(resolution, context, objects, types)
                time++
            }, 1000 / 60)
            

            return () => clearInterval(tick);
    }, [canvasRef, maxX, maxY, gravity, resolution, spawnDelay])

    return <canvas width={maxX} height={maxY + 10} ref={canvasRef} {...props}/>
}