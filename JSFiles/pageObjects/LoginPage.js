"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.txtUserName = protractor_1.element(protractor_1.by.name("username"));
        this.txtPassword = protractor_1.element(protractor_1.by.name("password"));
        this.btnLogin = protractor_1.element(protractor_1.by.css('button[class = "btn btn-primary btn-sm fw-thin loginBtn"]'));
        this.ddlSelectDataArea = protractor_1.element(protractor_1.by.name("somethingSelect"));
        this.btnSaveDataArea = protractor_1.element(protractor_1.by.css('button[class="btn btn-success btn-tiny pull-right"]'));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLFNBQVM7SUFRcEI7UUFFRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0NBb0NGO0FBbkRELDhCQW1EQyJ9