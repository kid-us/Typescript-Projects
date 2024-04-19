class ArrayUtils {
    static wrapInArray<V> (value: V){
        return [value];
    }
}

let utils =  new ArrayUtils();
let nums = ArrayUtils.wrapInArray(2)


function wrapInArray<V> (value: V){
    return [value];
}

let arrNumbers = wrapInArray("2");
