import {basePage} from "./basePage";

 export class hustlebutter extends basePage {
     noThanks: By = By.xpath('//button[@class="text-close js-modal-close"]')
     accountBtn: By = By.xpath('//a[@class="site-nav__link site-nav__link--icon small--hide"]');
     emailInput: By = By.xpath('//input[@id="CustomerEmail"]');
     passwordInput: By = By.xpath('//input[@id="CustomerPassword"]');
     signIn: By = By.xpath('//button[@class="btn btn--full"]')
     shopHustle: By = By.xpath('//a[@class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"]')
     products: By = By.xpath('//span[@class="collection-item__title collection-item__title--overlaid-box collection-item__title--body collection-item__title--bottom-center"]')
     luxe: By = By.xpath('//div[@class="grid-product__title grid-product__title--body"]')
     add: By = By.xpath('//button[@class="btn btn--full add-to-cart btn--secondary"]')
     
     constructor(){
         super({url: "https://www.hustlebutter.com/"})
     }
 }
