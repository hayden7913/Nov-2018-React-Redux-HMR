const _log = console.log;

console.log = function() {
  const args = arguments[0];
  const isString = typeof args === 'string';
  const fromHMR = args.indexOf('[HMR]') === -1;

  if (isString && fromHMR) {
    return _log.apply(console, arguments);
  }
};
