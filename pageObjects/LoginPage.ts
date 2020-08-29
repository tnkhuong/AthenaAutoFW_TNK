import {ElementFinder, element, by} from 'protractor';

export class LoginPage
{
  txtUserName: ElementFinder;
  txtPassword: ElementFinder;
  btnLogin: ElementFinder;
  ddlSelectDataArea: ElementFinder;
  btnSaveDataArea: ElementFinder;
  
  constructor()
  {
    this.txtUserName = element(by.name("username"));
    this.txtPassword = element(by.name("password"));
    this.btnLogin = element(by.css('button[class = "btn btn-primary btn-sm fw-thin loginBtn"]'));
    this.ddlSelectDataArea = element(by.name("somethingSelect"));
    this.btnSaveDataArea = element(by.css('button[class="btn btn-success btn-tiny pull-right"]'));
  }
  /*
  setUsername(username)
  {
    this.txtUserName.sendKeys(username);
  }

  setPassword(password)
  {
    this.txtPassword.sendKeys(password);
  }

  clickLogin()
  {
    this.btnLogin.click();
  }

  setSelectDataArea(dataarea)
  {
    this.ddlSelectDataArea.sendKeys(dataarea);
  }

  clickSaveDataArea()
  {
    this.btnSaveDataArea.click();
  }

  login(username, password, dataarea)
  {   
    this.setUsername(username);
    this.setPassword(password);
    this.clickLogin();
    this.setSelectDataArea(dataarea);
    this.clickSaveDataArea()
  }
  */
}