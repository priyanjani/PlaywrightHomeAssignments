import { WebComponent } from "./HomeassignmentInheritance2";

export class Button extends WebComponent{
    click(){
        console.log("additional message specific to buttons")
        super.click()
    }
}
let objbutton = new Button("#username")
objbutton.click()