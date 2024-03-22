//If we use import method then we use  the file extension is .mjs 
// const validator = require('validator');
// const chalk=require("chalk");

import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.blue("hello"));

const res=validator.isEmail('parasmani508@gmail.com');
//use terninary opeartor
console.log(res ? chalk.green.inverse(res): chalk.red(res));
