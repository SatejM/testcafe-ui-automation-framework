import {Selector} from 'testcafe';

export default class CartPage {
    constructor() {
        this.cartItem = Selector('[class="BOLD"]');
        
    }

    async getCartItemText(){

        return await this.cartItem.innerText;
    }
}

