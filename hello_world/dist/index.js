"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Capitalize(target, value, descriptor) {
    const originals = descriptor.get;
    descriptor.get = function () {
        const result = originals === null || originals === void 0 ? void 0 : originals.call(this);
        return (typeof result === "string" ? result.toUpperCase() : result);
    };
}
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return null;
    }
}
__decorate([
    Capitalize
], Persons.prototype, "fullName", null);
let persons = new Persons("lorem", "ipsum");
console.log(persons.fullName);
//# sourceMappingURL=index.js.map