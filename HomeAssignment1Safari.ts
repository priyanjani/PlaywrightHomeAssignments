import { Browser } from "./HomeAssignment1Browser";
class Safari extends Browser {
    readerMode(){
        console.log("Reader Mode")
    }
    fullScreenMode(){
        console.log("Full screen mode")
    }
}
let safariobj=new Safari()
safariobj.openURL()
safariobj.closeBrowser()
safariobj.navigateBack()
safariobj.readerMode()
safariobj.fullScreenMode()