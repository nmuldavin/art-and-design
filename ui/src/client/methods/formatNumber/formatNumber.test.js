import formatNumber from './formatNumber';

test('should format numbers correctly', () => {
  formatNumber(10000.7, {}, 'en-US').should.equal('10,000.7');
});

test('should format numbers correctly according to the specified options', () => {
  formatNumber(123456, { maximumSignificantDigits: 3 }, 'en-US').should.equal(
    '123,000',
  );
});
