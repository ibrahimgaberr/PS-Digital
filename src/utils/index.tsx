// Get Country and Language from Params
export const getCountryAndLocale = (params:{lang:string}) => {
  const { lang } = params;

  const countryLangArray = lang?.split("-");

  return {
    country: countryLangArray[0],
    lang: countryLangArray[1],
  };
};
