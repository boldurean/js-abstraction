const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

export default getGcd;
