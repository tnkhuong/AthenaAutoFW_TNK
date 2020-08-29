import {ElementFinder, element, by, browser} from 'protractor';

export class LoadingGear{

    loadinggear: ElementFinder;

    constructor()
    {      
        this.loadinggear = element(by.css('div[class = "loadingCover"]'));
    }

    waitUntilLoadingGearDisappear(time_out)
    {
        let waitingtime = 1000;
        while (this.loadinggear.isPresent() && waitingtime <= time_out)
        {
            browser.sleep(1000);
            waitingtime = waitingtime+1000;
        }
    }
};