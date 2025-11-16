// String
// primitive datatype,object data type
// string is immutable
let a="hii";//1st way
let b="hii";//2nd way
let c='hii';//3rd way

let g=new String("hii");//another way

let d=a+" "+b;//hiihii  //1st way
let e=a.concat(b);//2nd way
let f='hii${b}' //interpolation $  //3rd way
console.log(f);

//inbuilt methods
//1.length
b.length();
"hello".length();

//toUpperCase
b.toUpperCase();
"hello".toUpperCase();

//toLowerCase
b.toLowerCase();
"hello".toLowerCase();

//trim
b.trim();

//includes
"hello".includes('he');

//lastindexof
"hello".lastIndexOf('1');

//slice
"hello".slice(1,4);//o/p:-ell (exclude last index),negative index

//substring
"hello".substring(1,4)//ell only positive index

//split
"hello".split(' ');


