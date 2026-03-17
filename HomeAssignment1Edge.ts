import { Browser } from "./HomeAssignment1Browser";
class Edge extends Browser {
    takeSnap(){
        console.log("Take a snap")
    }
    clearCookies(){
        console.log("Clear the cookies")
    }
}
let edgeobj=new Edge()
edgeobj.openURL()
edgeobj.closeBrowser()
edgeobj.navigateBack()
edgeobj.takeSnap()
edgeobj.clearCookies()