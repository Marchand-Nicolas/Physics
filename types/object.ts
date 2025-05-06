export default interface Element {
  x: number;
  y: number;
  type: string;
  velocity: {
    x: number;
    y: number;
  };
  acceleration: {
    x: number;
    y: number;
  };
  radius: number;
}
