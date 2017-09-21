/*
 * Be sure to setup your config values before running this code. You can 
 * set them using environment variables or modifying the config file in /config.
 *
 */


const APP_SECRET = (process.env.MESSENGER_APP_SECRET) || "6b02d33fdbc9e3e66a27b241b8accf02" 

// Arbitrary value used to validate a webhook
const VALIDATION_TOKEN = (process.env.MESSENGER_VALIDATION_TOKEN) || 'secret'

// Generate a page access token for your page from the App Dashboard
const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) || "EAAHgKmu9kQ8BANunoXlva8sWwyOUBMta39NWyTf37cZCaNsVHSDT0oktlOGpDK5S711jrbgLmZBsFbFHczoTQAqw0V2SCLDeOjTmZB2nLGVx7cEHr6Y1Y0JmqSaGLKwGZC6prDcbKAXCXVZB4HsuzxXwbAmM6nPnPolnSSXfklAZDZD"

// URL where the app is running (include protocol). Used to point to scripts and 
// assets located at this address. 
// const SERVER_URL = (process.env.SERVER_URL)

exports.APP_SECRET = APP_SECRET;
exports.VALIDATION_TOKEN = VALIDATION_TOKEN;
exports.PAGE_ACCESS_TOKEN = PAGE_ACCESS_TOKEN;


