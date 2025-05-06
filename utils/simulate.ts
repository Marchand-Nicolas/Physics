import Element from "../types/object";
import { TypeDictionary } from "../types/type";

export default function simulate(
  resolution: number,
  gravity: number,
  maxX: number,
  maxY: number,
  objects: Array<Element>,
  types: TypeDictionary
) {
  for (let index = 0; index < objects.length; index++) {
    const object = objects[index];
    const type = types[object.type];
    for (let index = 0; index < objects.length; index++) {
      const otherObject = objects[index];
      if (object === otherObject) continue;
      const otherObjectType = types[otherObject.type];
      const distanceX = Math.abs(object.x - otherObject.x);
      const distanceY = Math.abs(object.y - otherObject.y);
      if (distanceX < resolution && distanceY < resolution) {
        let vectorX = 0;
        let vectorY = 0;
        vectorX = object.x - otherObject.x;
        vectorY = object.y - otherObject.y;
        if (object.type == otherObject.type) {
          vectorX = (object.x - otherObject.x) / 4;
          vectorY = (object.y - otherObject.y) / 4;
        }
        object.velocity.x = object.velocity.x * type.restitution + vectorX;
        object.velocity.y = object.velocity.y * type.restitution + vectorY;
        otherObject.velocity.x =
          otherObject.velocity.x * otherObjectType.restitution - vectorX;
        otherObject.velocity.y =
          otherObject.velocity.y * otherObjectType.restitution - vectorY;
      }
    }
    object.acceleration.y = gravity * type.mass;

    object.velocity.x += object.acceleration.x;
    object.velocity.y += object.acceleration.y;

    if (object.y > maxY) {
      object.y = maxY;
      object.velocity.y = -object.velocity.y * type.restitution;
    }

    if (object.x > maxX) {
      object.x = maxX;
      object.velocity.x = -object.velocity.x * type.restitution;
    }

    if (object.x < 0) {
      object.x = 0;
      object.velocity.x = -object.velocity.x * type.restitution;
    }

    if (object.y < 0) {
      object.y = 0;
      object.velocity.y = -object.velocity.y * type.restitution;
    }

    object.x += object.velocity.x;
    object.y += object.velocity.y;
  }
}
