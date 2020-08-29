"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LoginPage_1 = require("../pageObjects/LoginPage");
const LoadingGear_1 = require("../common/LoadingGear");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let login = new LoginPage_1.LoginPage();
let loadinggear = new LoadingGear_1.LoadingGear();
cucumber_1.Given('Navigate Athena website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://athena-demo.karrostech.io/#/app/login');
}));
cucumber_1.When('Input username: {string}, password: {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.txtUserName.clear();
    yield login.txtUserName.sendKeys(string);
    yield login.txtPassword.clear();
    yield login.txtPassword.sendKeys(string2);
}));
cucumber_1.When('Click login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.btnLogin.click();
}));
cucumber_1.When('Select {string} area', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.ddlSelectDataArea.sendKeys(string);
}));
cucumber_1.When('Click Save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.btnSaveDataArea.click();
    });
});
cucumber_1.Then('Should log in successfully to {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield loadinggear.waitUntilLoadingGearDisappear(10000);
    yield protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.Then('Should log in unsuccessfully and stay at {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield loadinggear.waitUntilLoadingGearDisappear(10000);
    yield protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELHVEQUFvRDtBQUNwRCwyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFbEMsZ0JBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFRLEVBQUU7SUFDekMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDM0UsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLE1BQU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLE1BQU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFPLEVBQUU7SUFDbEMsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUMxQyxNQUFNLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxZQUFZLEVBQUU7O1FBQ2pCLE1BQU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDNUQsTUFBTSxXQUFXLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1EQUFtRCxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDdkUsTUFBTSxXQUFXLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=