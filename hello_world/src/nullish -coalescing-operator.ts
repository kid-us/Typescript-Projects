let speed: number | null = null;

let ride = {
    // Falsy (undefined, null, '', false, 0)
    // Nullish coalescing operator --> this operator means the value can't not be null!
    speed: speed ?? 30
}