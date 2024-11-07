const express = require('express');
const Country = require('../models/Country');
const router = express.Router();

const { getUniqueRegions, filterCountriesByRegion, calculateSalesRequirement} = require('../helpers/countryHelper');

/* GET countries for specific region provided in the query string */
router.get('/countries', async (req, res) => {
    try{
        const {region} = req.query;
        const query = region ? {region} : {};
        const countries = await Country.find(query);
        res.json(countries);
    }catch (e) {
        res.status(500).json({error: 'Server error'});
    }
});


/* GET sales rep data */
router.get('/salesrep', async (req, res) => {
    try {
        const countries = await Country.find();
        // get unique regions from all countries
        const regions = getUniqueRegions(countries);
        // calculate min and max sales required for each region
        const salesRepData = regions.map(region => {
            const regionCountries = filterCountriesByRegion(countries, region);
            const {minSalesReq, maxSalesReq} = calculateSalesRequirement(regionCountries.length);
            return {region, minSalesReq, maxSalesReq};
        });
        res.json(salesRepData);
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }
});


/* GET optimal data */
router.get('/optimal', async (req, res) => {
    try {
        const countries = await Country.find();
        // get unique regions from all countries
        const regions = getUniqueRegions(countries);
        // calculate country count for each region and assign countries list to regions
        const optimalData = regions.map(region => {
            const regionCountries = filterCountriesByRegion(countries, region).map(c => c.name);
            return {region, countryList: regionCountries, countryCount: regionCountries.length};
        });
        res.json(optimalData);
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }
});

module.exports = router;