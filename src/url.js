/* eslint no-param-reassign: ["error", { "props": false }] */

const make = (url) => new URL(url);

const getProtocol = (url) => url.protocol;
const getHost = (url) => url.host;
const getPath = (url) => url.pathname;

const setProtocol = (url, protocol) => {
  url.protocol = protocol;
  return url.href;
};
const setHost = (url, host) => {
  url.host = host;
  return url.href;
};

const setPath = (url, path) => {
  url.pathname = path;
  return url.href;
};

const getQueryParam = (url, parameter) => url.searchParams.get(parameter);

const setQueryParam = (url, parameter, value) => url.searchParams.set(parameter, value);

const toString = (url) => url.toString();

export {
  make,
  getProtocol,
  getHost,
  getPath,
  setProtocol,
  setHost,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};
