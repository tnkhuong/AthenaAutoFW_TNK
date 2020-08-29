import { Given, When, Then } from "cucumber";
import { LoginPage } from "../pageObjects/LoginPage";
import { LoadingGear } from "../common/LoadingGear";
import { browser } from "protractor";
import chai from "chai";
var expect = chai.expect;
let login = new LoginPage();
let loadinggear = new LoadingGear();

  Given('Navigate Athena website', async ()=> {
    await browser.get('https://athena-demo.karrostech.io/#/app/login');
  });

  When('Input username: {string}, password: {string}', async(string, string2)=> {
    await login.txtUserName.clear();
    await login.txtUserName.sendKeys(string);
    await login.txtPassword.clear();
    await login.txtPassword.sendKeys(string2);
  });

  When('Click login button', async()=> {
    await login.btnLogin.click();    
  });

  When('Select {string} area', async(string)=> {
    await login.ddlSelectDataArea.sendKeys(string);
  });

  When('Click Save', async function () {
    await login.btnSaveDataArea.click();
  });

  Then('Should log in successfully to {string}', async(string)=> {
    await loadinggear.waitUntilLoadingGearDisappear(10000);
    await browser.getCurrentUrl().then(function(text){
      expect(text).to.equal(string);
    });
  });

  Then('Should log in unsuccessfully and stay at {string}', async(string)=> {
    await loadinggear.waitUntilLoadingGearDisappear(10000);
    await browser.getCurrentUrl().then(function(text){
      expect(text).to.equal(string);
    });
  });