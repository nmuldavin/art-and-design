import getLocale from './getLocale';

test('should return the first entry of navigator.languages by default', () => {
  getLocale().should.eql(navigator.languages[0]);
});
