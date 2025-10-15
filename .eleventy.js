module.exports = function (config) {
  config.setServerOptions({
    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      key: 'etc/localhost.key',
      cert: 'etc/localhost.crt',
    },
  });
  config.ignores.add('src/_deprecated_index.njk');
  config.ignores.add('readme.md');
  config.addPassthroughCopy('src/js');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
  };
};
