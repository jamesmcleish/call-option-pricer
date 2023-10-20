const cumulativeStandardNormalDistribution = require('./normalDistribution');

describe('cumulativeStandardNormalDistribution', () => {
  test('it should calculate the cumulative standard normal distribution for positive x', () => {
    expect(cumulativeStandardNormalDistribution(1.0)).toBeCloseTo(0.8413, 4); 
  });

  test('it should calculate the cumulative standard normal distribution for negative x', () => {
    expect(cumulativeStandardNormalDistribution(-1.0)).toBeCloseTo(0.1587, 4);
  });
});