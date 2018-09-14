import getLocale from '../getLocale';

/**
 * Formats a number according to a users browser locale settings
 * using [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
 * @param  {Number} number    Number to format
 * @param  {Object} [options] Optional formatter options. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 * @param  {String} [locale]  Optional locale override for testing and experimenting (Hey what will this look like in Cambodia?)
 * @return {String}           Formatted Number
 */
const formatNumber = (number, options, locale) => {
  const formatter = new Intl.NumberFormat(locale || getLocale(), options);
  return formatter.format(number);
};

export default formatNumber;
