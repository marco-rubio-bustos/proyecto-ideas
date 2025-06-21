export function generarRectangulo(x1: number, y1: number, x2: number, y2: number): Array<[number, number]> {
  const coords: Array<[number, number]> = [];
  const [minX, maxX] = [Math.min(x1, x2), Math.max(x1, x2)];
  const [minY, maxY] = [Math.min(y1, y2), Math.max(y1, y2)];

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      coords.push([x, y]);
    }
  }

  return coords;
}
