import {Selector, t} from 'testcafe';

export default class HomePage {
    constructor() {
        this.searchBar = Selector('#gh-ac');
    }

    async searchItem(item){
        await t.maximizeWindow();
        await t.typeText(this.searchBar,item);
        await t.pressKey('enter');
    }

}

