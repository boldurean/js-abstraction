import {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
} from './points.js';

const makeRectangle = (point, width, heigth) => ({ point, width, heigth });

const getStartPoint = (rectangle) => rectangle.point;
const getWidth = (rectangle) => rectangle.width;
const getHeigth = (rectangle) => rectangle.heigth;

const containsOrigin = (rectangle) => {
  const a = getStartPoint(rectangle);
  const c = makeDecartPoint(getX(a) + getWidth(rectangle), getY(a) - getHeigth(rectangle));
  return getQuadrant(a) === 2 && getQuadrant(c) === 4;
};

export { makeRectangle, containsOrigin };
