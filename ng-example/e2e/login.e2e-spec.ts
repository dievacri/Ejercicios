import { LoginPage } from './login.po';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should have <app-login>', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);
  });

  it('should have header', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);
    expect(page.getTitle().getText()).toEqual('Iniciar Sesion');
  });

  it('should login the page', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);

    var email = page.getInputEmail();
    expect(email.isPresent()).toEqual(true);
    email.sendKeys('jcyovera');

    var passwd = page.getInputPassword();
    expect(passwd.isPresent()).toEqual(true);
    passwd.sendKeys('123456777');

    var btnLogin = page.getBtnLogin();
    expect(btnLogin.isPresent()).toEqual(true);

    btnLogin.click().then(() =>{
      var message = page.getErrorMessage();
      expect(message.isPresent()).toBe(true);
      //expect(page.getHome()).toBe(true);
    });
  });
});
