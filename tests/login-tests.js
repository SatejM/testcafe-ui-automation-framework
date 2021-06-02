import LoginPage from "../pages/login";
import * as constants from "../resources/constants";
const testData = require('../data/testData'); 

const loginPage = new LoginPage();

fixture('Login Suite')
    .page(constants.getDefaultPageURL())
    .meta('functional', 'true');

/**
 * Login Test Scenarios
 *  1. Login with invalid userName
 */

test(`Login with invalid credentials`, async t => {
    await t.expect(await loginPage.enterInvalidUserName(testData[0].invalidUserName)).eql(testData[0].errorMessage);      
});