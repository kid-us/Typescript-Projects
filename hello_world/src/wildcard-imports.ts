// If we want to import all class of fils from on file we use wildcard importing not this 
// import { Lorem, Ipsum } from "./exporting-importing";

import * as Lorem from './exporting-importing';

let lorem  = Lorem.Lorem
let ipsum = Lorem.Ipsum;

console.log(lorem, ipsum);
