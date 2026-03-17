export class Browser{
    browserType:string
    browserVersion:string
    openURL(){
        console.log("Open a url")
    }
    closeBrowser(){
        console.log("Close the browser")
    }
    navigateBack(){
        console.log("Navigate back to the browser")
    }
}