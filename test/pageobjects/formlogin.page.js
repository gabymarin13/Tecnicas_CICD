import Page from './page';

class FormLogin extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h2');
    }

    get getInputUsername(){
        return $('#username');
    }

    get getInputPassword(){
        return $('#password');
    }
    get submitButton(){
        return $('.radius');
    }

    login(Username, password){
        this.getInputUsername.setValue(Username);
        this.getInputPassword.setValue(password);
        this.submitButton.click();
    }
}

export default new FormLogin();