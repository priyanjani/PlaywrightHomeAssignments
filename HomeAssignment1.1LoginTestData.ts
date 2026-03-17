import { TestData } from "./HomeAssignment1.1Testdata";

class LoginTestData extends TestData{
    enterUsername(){
        console.log("anjUsername")
    }
    enterPassword(){
        console.log("pwdpassword")
    }
}
let logindataobj = new LoginTestData
logindataobj.enterCredentials()
logindataobj.enterUsername()
logindataobj.enterPassword()
logindataobj.navigateToHomePage()