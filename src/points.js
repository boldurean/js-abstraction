export default (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};
// alternative

const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];
  return Math.hypot(deltaX, deltaY);
};

const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2));
