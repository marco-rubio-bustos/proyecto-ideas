export function getCollidingObstacle<T extends { x: number; y: number; width: number; height: number }>(
  obstacles: T[],
  x: number,
  y: number,
  size: number
): T | undefined {
  return obstacles.find((ob) => {
    return !(
      x + size <= ob.x ||
      x >= ob.x + ob.width ||
      y + size <= ob.y ||
      y >= ob.y + ob.height
    );
  });
}
