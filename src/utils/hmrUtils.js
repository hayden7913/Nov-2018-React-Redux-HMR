const _log = console.log;

const isString = args => typeof args === 'string';
const isFromHMR = args => (
  isString(args)
    ? !(args.indexOf('[HMR]') === -1)
    : false
);

console.log = function() {
  const args = arguments[0];
  if (!isFromHMR(args)) {
    return _log.apply(console, arguments);
  }
};
