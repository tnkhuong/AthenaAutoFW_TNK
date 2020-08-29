import {ElementFinder, element, by} from 'protractor';

export class HomePage
{
  lnkMapping: ElementFinder;
  lnkTelematics: ElementFinder;

  constructor()
  {
    this.lnkMapping = element(by.css('img[title="Mapping"]'));
    this.lnkTelematics = element(by.css('img[title="Telematics"]'));
  }

  navigateMapping()
  {
   this.lnkMapping.click();
  }

  navigateTelematics()
  {
    this.lnkTelematics.click().then(function()
    {
    console.log("Go to Telematics");
    });
  }
}