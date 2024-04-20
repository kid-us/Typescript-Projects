"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(diameter, color) {
        super(color);
        this.diameter = diameter;
    }
    render() {
        console.log("Rendering Circle");
    }
}
//# sourceMappingURL=abstract.js.map