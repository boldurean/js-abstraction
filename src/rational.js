import getGcd from './utils.js';

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return {
    numer: numer / gcd,
    denom: denom / gcd,
  };
};
const getNumer = (rat) => rat.numer;
const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
  ));

const sub = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
  ));
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
