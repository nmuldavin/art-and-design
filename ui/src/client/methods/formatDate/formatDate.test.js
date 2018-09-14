import formatDate from './formatDate';

test('should format dates correctly', () => {
  formatDate(new Date('Januar 1, 2018'), {}, 'en-US').should.equal('1/1/2018');
});
