"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingGear = void 0;
const protractor_1 = require("protractor");
class LoadingGear {
    constructor() {
        this.loadinggear = protractor_1.element(protractor_1.by.css('div[class = "loadingCover"]'));
    }
    waitUntilLoadingGearDisappear(time_out) {
        let waitingtime = 1000;
        while (this.loadinggear.isPresent() && waitingtime <= time_out) {
            protractor_1.browser.sleep(1000);
            waitingtime = waitingtime + 1000;
        }
    }
}
exports.LoadingGear = LoadingGear;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZ0dlYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tb24vTG9hZGluZ0dlYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStEO0FBRS9ELE1BQWEsV0FBVztJQUlwQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsNkJBQTZCLENBQUMsUUFBUTtRQUVsQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsSUFBSSxRQUFRLEVBQzlEO1lBQ0ksb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsV0FBVyxHQUFHLFdBQVcsR0FBQyxJQUFJLENBQUM7U0FDbEM7SUFDTCxDQUFDO0NBQ0o7QUFsQkQsa0NBa0JDO0FBQUEsQ0FBQyJ9