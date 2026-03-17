import { Browser } from "./HomeAssignment1Browser";
class chrome extends Browser {
    openIncognito(){
        console.log("Open incognito window")
    }
    clearCache(){
        console.log("Clear the cache")
    }
}
let chromeobj=new chrome()
chromeobj.openURL()
chromeobj.closeBrowser()
chromeobj.navigateBack()
chromeobj.openIncognito()
chromeobj.clearCache()

