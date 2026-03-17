export class WebComponent{
    selector:string
    constructor(selector:string){
        this.selector=selector
    }
    click(){
        console.log("simulating a click")
    }
    focus(){
        console.log("simulating focusing on the component")
    }
}
