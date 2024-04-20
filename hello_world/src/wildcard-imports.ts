// If we want to import all class of fils from on file we use wildcard importing not this 
// import { Lorem, Ipsum } from "./exporting-importing";

import * as Lorem from './exporting-importing';

let lorem  = new Lorem.Lorem("Lorem");
let ipsum = new Lorem.Ipsum(42);

console.log(lorem, ipsum);
