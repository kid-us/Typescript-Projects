
function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() { return value},
            set(newValue: string) {
                if (newValue.length> length)
                    throw new Error (`${propertyName} should be at least ${length} chars long!`)
                return value = newValue;
            },
        }
        Object.defineProperty(target, propertyName, descriptor);
    }
}


class Users {
    @MinLength(4)
    password: string;

    constructor (password: string){
        this.password  = password;
    }

}

let userPassword = new Users("1234");

console.log(userPassword.password);
