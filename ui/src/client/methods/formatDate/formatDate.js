import getLocale from '../getLocale';

const formatDate = (date, options, locale) => {
  const formatter = new Intl.DateTimeFormat(locale || getLocale(), options);
  return formatter.format(date);
};

export default formatDate;
