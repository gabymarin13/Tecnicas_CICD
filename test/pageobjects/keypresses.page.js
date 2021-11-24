import Page from './page';

class KeyPressesPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h3');
    }

    get getInput(){
        return $('#target');
    }

    get getResults(){
        return $('#results');
    }

    typeValue(character){
        return this.getInput.setValue(character);
    }
}

export default new KeyPressesPage();