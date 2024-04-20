function Component(constructor: Function){
    console.log("Constructor decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () =>{
        console.log("Inserting the component in the Dom");
    }
}

@Component
class ClassComponent{}