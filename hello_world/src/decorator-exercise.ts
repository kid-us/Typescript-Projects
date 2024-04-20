// Create a decorator for adding a sauce to pizza instances
@Sauce("pesto")
class Pizz{}

function Sauce(sauce: string){
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
    }
}