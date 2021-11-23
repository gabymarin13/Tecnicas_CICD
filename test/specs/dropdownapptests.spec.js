import DropdownPage from '../pageobjects/dropdowns.page';

describe('My Dropdown App', () => {
    beforeAll(async function(){
        console.log('I get executed before all "its". ');
    }); 
    beforeEach(async function(){
        console.log('I get executed before every "it". ');
        await DropdownPage.open('dropdown');
    });
    
    afterAll(async function(){
        console.log('I get executed after all "its". ');
    }); 
    afterEach(async function(){
        console.log('I get executed after every "it". ');
        await DropdownPage.open('dropdown');
    });

    it('Should open the dropdown app', async () => {
        console.log('First test');
        await expect(DropdownPage.getTitle).toHaveTextContaining('Dropdown List');
    });
    it('Select the first dropdown option', async () => {
        console.log('Second test');
        await DropdownPage.setDropdownValuebyIndex(1);
        await expect(DropdownPage.currentSelected()).toHaveTextContaining('Option 1');
    });
});