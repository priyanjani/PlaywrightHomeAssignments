import test, { chromium,webkit } from "@playwright/test";

test('Lauch browser',async()=>{
 //Callbacks   

  let browser = "Chrome"
  function checkbrowserversion(callback:any){
    setTimeout(() => {
        callback(browser)
    }, 2000);
  }
  function logbrowserversion(browser:any){
    
    console.log("Browser version using callback:"+browser)
   
}
checkbrowserversion(logbrowserversion)

//  function 

// launch two separate browser instances using Playwright

    //launch the edge browser
    const edgebrowser=await chromium.launch({channel:'msedge'})
    //open the window
    const edgecontext=await edgebrowser.newContext()
    //open the page
    const edgepage=await edgecontext.newPage()
    //load the url
    await edgepage.goto(' https://www.redbus.in') 
    await edgepage.waitForTimeout(5000)
    const pgTitle = await edgepage.title()
     console.log(pgTitle)
     console.log(edgepage.url())
    //launch the webkit browser
    
    const webkitbrowser=await webkit.launch()
    //open the window
    const webkitcontext=await webkitbrowser.newContext()
    //open the page
    const webkitpage=await webkitcontext.newPage()
    //load the url
    await webkitpage.goto('https://www.flipkart.com') 
    await webkitpage.waitForTimeout(5000)
    const wpgTitle = await webkitpage.title()
     console.log(wpgTitle)
    console.log(webkitpage.url())
    })