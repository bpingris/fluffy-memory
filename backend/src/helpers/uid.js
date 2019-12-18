module.exports = () =>
  Math.random()
    .toString(36)
    .substr(2, 10) +
  "_" +
  Math.random()
    .toString(36)
    .substr(2, 10);
