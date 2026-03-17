import { Button } from "./HomeAssigmentInheritbutton2";

class TextInput extends Button{
    txtvalue:string=""
    enterText(text: string){
        this.txtvalue=text
        console.log("New text value"+text+"into"+this.selector)
    }
}
let objnew=new TextInput("sindhu")
 function testComponents(text:any){
   objnew.focus()
   objnew.enterText(text)
   
   
}
testComponents(objnew.txtvalue)