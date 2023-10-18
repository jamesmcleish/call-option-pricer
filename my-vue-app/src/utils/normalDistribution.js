function cumulativeStandardNormalDistribution(x) {
  const a1 = 0.31938153;
  const a2 = -0.356563782;
  const a3 = 1.781477937;
  const a4 = -1.821255978;
  const a5 = 1.330274429;
  const L = Math.abs(x);

  const K = 1.0 / (1.0 + 0.2316419 * L);
  var w = 1.0 - 1.0 / Math.sqrt(2 * Math.PI) * Math.exp(-L * L / 2) * (a1 * K + a2 * K * K + a3 * K * K * K + a4 * K * K * K * K + a5 * K * K * K * K * K);

  if (x < 0) {
    w = 1.0 - w;
  }

  return w;
}

module.exports = cumulativeStandardNormalDistribution;