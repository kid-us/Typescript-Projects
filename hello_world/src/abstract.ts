// Abstract class is like nor ready thing for example not cooked meal.
// We can use only abstract methods inside abstract class 
abstract class Shape {
    constructor(public color: string) {}
    abstract render() : void;
}


class Circle extends Shape {
    constructor(public diameter: number, color: string){
        super(color)
    }

    override render(): void {
        console.log("Rendering Circle");
    }
}

// let shape = new Shape ("Red");
// shape.render();