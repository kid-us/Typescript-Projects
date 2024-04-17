// We can use both syntax
let phone = document.getElementById("phone") as HTMLInputElement;
let email = <HTMLInputElement> document.getElementById("Email");
// By default document.getElementById("phone") type is HTMLElement for all including input fields.
// Input fields are different type which is HTMLInputElement
phone.value;