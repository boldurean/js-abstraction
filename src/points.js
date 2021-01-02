const makeDecartPoint = (x, y) => ({ x, y });

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
};
