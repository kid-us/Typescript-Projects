class GenericClasses<K,V> {
    constructor(public key: K, public value: V){}
}

let keyValue = new GenericClasses(1, "lorem");