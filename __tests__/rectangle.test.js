import { makeRectangle, containsOrigin } from '../src/rectangle.js';
import { makeDecartPoint } from '../src/points.js';

test('rectangle1', () => {
  const p = makeDecartPoint(0, 1);
  const rectangle = makeRectangle(p, 4, 5);
  expect(containsOrigin(rectangle)).toBe(false);
});

test('rectangle2', () => {
  const p = makeDecartPoint(-4, 3);
  const rectangle1 = makeRectangle(p, 5, 4);
  expect(containsOrigin(rectangle1)).toBe(true);

  const rectangle2 = makeRectangle(p, 2, 2);
  expect(containsOrigin(rectangle2)).toBe(false);

  const rectangle3 = makeRectangle(p, 2, 4);
  expect(containsOrigin(rectangle3)).toBe(false);

  const rectangle4 = makeRectangle(p, 4, 3);
  expect(containsOrigin(rectangle4)).toBe(false);

  const rectangle5 = makeRectangle(p, 5, 2);
  expect(containsOrigin(rectangle5)).toBe(false);
});
