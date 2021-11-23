import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InputPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getTitle() {
        return $('h3');
    }

    get getInput(){
        return $('#content > div > div > div > input[type=number]');
    }

    InputValueManually(){
        return this.getInput.setValue(4);
    }

    get getValueOfInput(){
        return this.getInput.getValue();
    } 
    
    get getSubtitle(){
        return $('#content > div > div > div > p');
    }

    settingValueToArrowUp(){
        return this.getInput.setValue('{38}');
    }
    
    settingValueToArrowUp(){
        return this.getInput.setValue('{40}');
    } 

}

export default new InputPage();