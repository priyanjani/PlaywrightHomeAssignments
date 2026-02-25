import {test,expect} from '@playwright/test'
test('Automating alert and frame functions',async({page})=>{
     page.on('dialog',alertType=>{
       const message= alertType.message()
       console.log(message)
       const type= alertType.type()
       console.log(type)
       if(type==='confirm'){
        alertType.accept()
       }
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.frameLocator("//iframe[@id='iframeResult']").getByText("Try it").click()
    await page.waitForTimeout(2000)
    const result = page.frameLocator("//iframe[@id='iframeResult']").locator("#demo")
    await expect.soft(result).toContainText("You pressed OK!")
})