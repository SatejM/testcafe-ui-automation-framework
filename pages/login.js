
import {Selector, t} from 'testcafe';

export default class LoginPage {
    constructor() {
        this.defaultSignInPage = Selector('[title="My eBay"]');
        this.userName = Selector('#userid');
        this.loginButton = Selector('#signin-continue-btn');
        this.errorMessage = Selector('#signin-error-msg');
    }

    async enterInvalidUserName(invalidUserName) {

        await t.maximizeWindow();
        await t.click(this.defaultSignInPage);
        await t.typeText(this.userName, invalidUserName);
        await t.click(this.loginButton);
        return await this.errorMessage.innerText;
    }

}

