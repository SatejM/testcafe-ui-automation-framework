import {Selector, t} from 'testcafe';

export default class SearchPage {
    constructor() {
        this.searchResult = Selector('[class="s-item__image-img"]');
        this.bikeColor = Selector('#msku-sel-1');
        this.addToCart = Selector('#isCartBtn_btn');
        this.noThanksButton = Selector('button').withText('No thanks');
        this.viewCart = Selector('#vi-viewInCartBtn');
        
    }

    async clickSearchItem(){
        await t.click(this.searchResult);
    }

    async selectBikeColor(color){
        await t
                .click(this.bikeColor)
                .click(Selector('[id="msku-opt-0"]', { text: color }));              
    }

    async clickAddToCart(){
        await t.click(this.addToCart);
    }

    async clickDialogPlan(){
        await t.click(this.noThanksButton);
    }

    async clickViewToCart(){
        await t.click(this.viewCart);
    }

}

