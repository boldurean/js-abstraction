import { makeDecartPoint } from './points.js';

const makeSegment = (beginPoint, endPoint) => ({
  beginPoint,
  endPoint,
});

const getMidpointOfSegment = (segment) => {
  const x = (segment.beginPoint.x + segment.endPoint.x) / 2;
  const y = (segment.beginPoint.y + segment.endPoint.y) / 2;
  return { x, y };
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

export {
  makeSegment,
  getMidpointOfSegment,
  getBeginPoint,
  getEndPoint,
};

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)
