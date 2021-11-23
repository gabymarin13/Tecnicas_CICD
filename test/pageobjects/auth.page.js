import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AuthPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getTitle() {
        return $('h3');
    }
}

export default new AuthPage();