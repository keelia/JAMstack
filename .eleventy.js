module.exports = function (config) {
  config.ignores.add('src/_deprecated_index.njk');
  config.addPassthroughCopy('src/js');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
  };
};
