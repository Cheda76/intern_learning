// General ====>  enums use to define list of constant list
const small = 1;
const medium=2;
const large =3;

// in type script it can be define as 1)implicit and 2 explicit
//1) implicit by default seting 0,1,2,3....,n 
enum Size{small, medium,large};

enum Sizes{small=1, medium,large};// rest will be 2,3
enum size{small='1', medium='m',large='i'};// rest will be 2,3


const enum SizE{small=1,medium,large};
let mysize: SizE= SizE.medium;
console.log(mysize)