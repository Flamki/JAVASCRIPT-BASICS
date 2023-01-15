alert(`welcome to learning javascript`);

// tamplate literals
let text = `he often's calles "james"` + "\n so he is happy";
console.log(text);

//interpolation
//syntax : `${...}`
let FirstName = "ayush";
let LastName = 'singh';
var Value = 0999;
let Text = `congartulation ${FirstName} ${LastName} to be a hounrable member of this community ${Value}`
console.log(Text)

//expression
let p = "orange";
let c = "lemon";
let tast = "tasty";
let total = `${c * p} fruit ${tast}`
console.log(total);

//boolean
let name = 55 < 99;
console.log(name.boolean)

//undefined
let x = "zerox";
x = undefined;
console.log(x);

// //null
// let a="name";
// document.write(a==null)

//bigint
let nat = 5n + 3n;
console.log(nat);

// SYMBOL-(data type)
// basic syntax is symbol()
let empid = Symbol("ayush");//use capital 'S' in Symbol
// to print symbol
alert(empid.toString());//use capital 'S' in to'S'tring
//output is Symbol(ayush)
//OR 
//use description to print Symbol
alert(empid.description);//output is ayush

//user-defined or non-primitive data type (object,function,arrays)
//objects
let names = {
  student1: 'ayush',
  student2: 'laptop',
  student3: 'hand',
  students4: 'all books'
};
console.log(names);

//functions

//arrays
let dummyarray = new Array();
//or
let dummyarr = [];
//ex:
numeric = [1, 2, 3, "four"];//a single array can hold values of different data types
console.log(numeric);


//operators
let y,s=4;
console.log(s);
console.log(y)
