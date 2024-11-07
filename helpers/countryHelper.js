/** get unique regions from all countries
 * @param {any} countries
 * @returns {Array}
 */
const getUniqueRegions = (countries) => {
    return [...new Set(countries.map(country => country.region))];
}

/** filter countries by region
 * @param {any} countries
 * @param {String} region
 * @returns {Array}
 */
const filterCountriesByRegion = (countries, region) => {
    return countries.filter(country => country.region === region);
}

/** calculate min and max sales required for each region
 * @param {any} countryCount
 * @returns {Object}
 */
const calculateSalesRequirement = (countryCount) => {
    const minSalesReq = Math.ceil(countryCount / 7);
    const maxSalesReq = Math.min(9, Math.floor(countryCount / 3));
    return {minSalesReq, maxSalesReq};
}

module.exports = {
    getUniqueRegions,
    filterCountriesByRegion,
    calculateSalesRequirement
}