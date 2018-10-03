const getLocale = () => {
  const { navigator } = window;

  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  }

  /**
   * IE only
   */
  if (navigator.userLanguage) {
    return navigator.userLanguage;
  }

  return navigator.language;
};

export default getLocale;
