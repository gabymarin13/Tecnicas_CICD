import InputPage from '../pageobjects/inputs.page';

describe('My Input Values App', () => {
    beforeAll(async function(){
        console.log('First execution of all scripts');
    }); 
    beforeEach(async function(){
        console.log('Navigate to Inputs page');
        await InputPage.open('inputs');
    });

    it('Should find the input value element', async () => {
        console.log('1° test');
        await expect(InputPage.getTitle).toHaveTextContaining('Inputs');
    });

    it('Should find the subtitle of the Inputs page', async () => {
        console.log('2° test');
        await expect(InputPage.getSubtitle).toHaveTextContaining('Number');
    });
    
    it('Should insert #4 manually', async () => {
        console.log('3° test');
        await InputPage.InputValueManually();
        expect(InputPage.getInput).toHaveValue(4);
    });

    it('Should arrow up the value into the input element', async () => {
        console.log('4° test - Arrow up');
        if(expect(InputPage.getInput).toHaveTextContaining('{38}')){
            InputPage.getInput.setValue(1);
        }    
    });

    it('Should arrow down the value into the input element', async () => {
        console.log('5° test - Arrow down');
        if(expect(InputPage.getInput).toHaveTextContaining('{40}')){
            InputPage.getInput.setValue(-1);
        }    
    });

    afterAll(async function(){
        console.log('All tests have been completed');
    });

     afterEach(async function(){
        console.log('Test executed');
    });

});