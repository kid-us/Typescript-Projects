function render (document : unknown) : string | number {
    // Narrowing
    if(typeof document === "string"){
        return document.toLowerCase();
    }else{
        return 2;
    }
}

render("Lol")