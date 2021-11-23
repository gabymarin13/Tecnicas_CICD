import LoginPage from  '../pageobjects/login.page';
import AuthPage from  '../pageobjects/auth.page';


describe('My Login application', () => {
    it('Should login with valid credentials', async () => {
        await LoginPage.login('admin', 'admin');
        await expect(AuthPage.getTitle).toBeExisting();
        await expect(AuthPage.getTitle).toHaveTextContaining('Basic Auth');
    });
});



