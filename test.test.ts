import { Button } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { hustlebutter } from "./pageObject";

const hustle = new hustlebutter

test("sign In", async () => {
    await hustle.navigate()
    await hustle.driver.manage().window().maximize()
    await hustle.click(hustle.noThanks)
    await hustle.driver.sleep(1500)
    await hustle.getElement(hustle.accountBtn)
    await hustle.click(hustle.accountBtn)
    await hustle.setInput(hustle.emailInput,"hidswan@gmail.com")
    await hustle.setInput(hustle.passwordInput, "Remynbell2dogs")
    await hustle.click(hustle.signIn)
    await hustle.driver.sleep(1000)
    await hustle.click(hustle.shopHustle)
    await hustle.click(hustle.products)
    await hustle.click(hustle.luxe)
    await hustle.click(hustle.add)

})



