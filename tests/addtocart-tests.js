import HomePage from '../pages/homepage.js';
import SearchPage from '../pages/searchpage.js';
import CartPage from '../pages/cartpage.js';
import * as constants from "../resources/constants";
const testData = require('../data/testData'); 

const homePage = new HomePage();
const searchPage = new SearchPage();
const cartPage = new CartPage();

fixture('Add to Cart Test Suite')
    .page(constants.getDefaultPageURL())
    .meta('functional', 'true');

/**
 * Add to Cart Test Scenarios
 *  1. Search item and add the item to cart - verify if the item is added to the cart
 */

test(`Add item to cart and verify if it's added`, async t => {
    await homePage.searchItem(testData[0].searchCriteria);
    await searchPage.clickSearchItem();
    await searchPage.selectBikeColor(testData[0].bikeColor);
    await searchPage.clickAddToCart();
    await searchPage.clickDialogPlan();
    await t.expect(await cartPage.getCartItemText()).eql(testData[0].searchResult);
  
});