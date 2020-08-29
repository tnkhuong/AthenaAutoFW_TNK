"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("./pageObjects/LoginPage");
const HomePage_1 = require("./pageObjects/HomePage");
const TelematicsPage_1 = require("./pageObjects/Telematics/TelematicsPage");
const VehicleRouteAssignmentPage_1 = require("./pageObjects/Telematics/DataManagement/VehicleRouteAssignment/VehicleRouteAssignmentPage");
let login = new LoginPage_1.LoginPage();
let homepage = new HomePage_1.HomePage();
let telematicspage = new TelematicsPage_1.TelematicsPage();
let vehiclerouteassignment = new VehicleRouteAssignmentPage_1.VehicleRouteAssignmentPage();
describe('angularjs homepage', () => {
    it('Log in', function () {
        protractor_1.browser.get('https://athena-demo.karrostech.io/#/app/login');
        //login.login("jpomije@gmail.com","test2","plan")    
        homepage.navigateTelematics();
        telematicspage.navigateVehicleRouteAssignment();
        protractor_1.browser.sleep(10000);
        vehiclerouteassignment.setFromDate("08/22/2020");
        vehiclerouteassignment.setToDate("08/30/2020");
        vehiclerouteassignment.setCapacity("90");
        vehiclerouteassignment.setStartTime();
        /*
          //browser.ignoreSynchronization = true;
          browser.get('https://athena-demo.karrostech.io/#/app/login');
          
          element(by.name("username")).sendKeys("jpomije@gmail.com");
          element(by.name("password")).sendKeys("test2");
          element(by.css('button[class = "btn btn-primary btn-sm fw-thin loginBtn"]')).click();
          
          element.all(by.css('option')).first().click();
          element(by.css('button[class="btn btn-success btn-tiny pull-right"]')).click();
        
          
          element(by.css('img[title="Mapping"]')).click();
      
          element(by.xpath('//a[text() = " Management"]')).getText().then(function(text)
          {
          console.log(text);
          })
          element(by.xpath('//a[text() = " Point Location Management"]')).click();
          */
        protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFnRDtBQUNoRCx1REFBb0Q7QUFDcEQscURBQWtEO0FBQ2xELDRFQUF5RTtBQUN6RSwwSUFBdUk7QUFFdkksSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDOUIsSUFBSSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDMUMsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLHVEQUEwQixFQUFFLENBQUM7QUFHOUQsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUUsRUFBRTtJQUMvQixFQUFFLENBQUMsUUFBUSxFQUFFO1FBRWIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUU3RCxxREFBcUQ7UUFDckQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsY0FBYyxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFFaEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsc0JBQXNCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkk7UUFFRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=