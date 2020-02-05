import { values } from 'lodash';
let countries = require('i18n-iso-countries');


function getCountryNames() {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    return values(countries.getNames('en'))
}


export default CountryService = {
    getCountryNames
}
