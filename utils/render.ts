import Element from "../types/object";
import { TypeDictionary } from "../types/type";

export default function render(
  resolution: number,
  context: any,
  objects: Array<Element>,
  types: TypeDictionary
) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  for (let index = 0; index < objects.length; index++) {
    const object = objects[index];
    const type = types[object.type];
    /*context.strokeStyle = type.color
        context.beginPath();
        context.arc(object.x, object.y, type.radius, 0, 2 * Math.PI);
        context.stroke();*/
    /*context.beginPath();
        context.arc(object.x, object.y, type.radius + 10, 0, 2 * Math.PI);
        context.fillStyle = '#3283a8'
        context.fill();*/
    context.fillStyle = type.color;
    context.fillRect(
      Math.round(object.x / resolution) * resolution,
      Math.round(object.y / resolution) * resolution,
      resolution,
      resolution
    );
  }
}
