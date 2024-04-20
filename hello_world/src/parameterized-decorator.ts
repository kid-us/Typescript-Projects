type ComponentOption = {
    selector: string;
};

function Component (value: ComponentOption){
    return (constructor: Function)=> {
        console.log("Constructor decorator called");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.option = value;
        constructor.prototype.insertInDom = () =>{
            console.log("Inserting the component in the Dom");
        }
    }

}

@Component({selector: "#root"})
class ClassComponent{}



