const cron = require('node-cron');
const https = require('https');
const request = require('undici').request;

require('dotenv').config();

cron.schedule('*/10 * * * * *', () => {
  const now = new Date();
  console.log(`Current time: ${now}`);
  fetchForexExhangeRate();
});

/**
 * Fetch desired forex pairs from https://currencylayer.com
 */
const fetchForexExhangeRate = async () => {
    //Create the URL string to get FX pairs
    const urlString=`${process.env.FX_BASEURL}/live?${process.env.FX_API_PARAM}=${process.env.FX_API_KEY}`;
    //Get data from the FX rates host
    const results = {
        statusCode,
        headers,
        trailers,
        body
    } = await request(urlString);
    //Process and store pairs
    if (results.statusCode == 200) {
        console.log(await results.body.json());
    }
}

