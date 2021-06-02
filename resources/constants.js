require('dotenv').config();

//Environment URLS
const envURL = 'https://www.ebay.com.au/';

export function getDefaultPageURL() {
    return `${envURL}`;
}
export function getUserName() {
    return process.env.ADMIN_USERNAME;
}

export function getPassword() {
    return process.env.ADMIN_PASSWORD;
}