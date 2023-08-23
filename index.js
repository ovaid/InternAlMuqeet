
// ============-----------------> DAY 2 <---------------============================== 
var name = "my name"
var obj1 = {
    fname : "Rameez",
    lname : "Ovaid",
    address : "Anantnag",
    company : "Al Muqeet Sytems",
    location  : "Srinagar",
    id : 418,
    fun :  function(){
      return (this.fname + " " +this.lname + " " + name);
    }
  };


  console.log(obj1.fun());
  console.log(name);



  // function myName(name, info, work){
  //   return `My name is ${name}, i live in ${info} and i am a  ${work}`;
  // }
  // console.log(myName("Rameez", "Anatnag", "softwareDeveloper"));
  

// let name = "my name";
// console.log(name);
// console.log(Document);// this gives me a function by default;
// console.log(window);// this gives me window file like what i have written in the file and some default values


// 2====> this alone in window/global object 
let x = this;
console.log(this) 
// above line will print the window file 


// 3=====> this inside a function always calls for global scope(this is a default binding),below is an example;
var name1 ="Al Muqeet";
var age1 = 15;
function hello(){
    var name2 = "Al Muqeet Systems   ";
    var age2 = 17; 
  return this.name1+" " +this.age1;
}
console.log(hello());
// the above funciton will always prints the global varibales i.e , which are outside the function
// this is an example of THIS in a function . 




// 3====> this will always print he undefined and is also used for providingf better securityad error checking, below is an example for strict mode of using this keywoprd  ,, for using strict mode we havce to declare the "use strict" as a string and is compulsory for strict mode...(caveat means --> condition or warning)
"use strict";
function world(){
  var n1 = "software";
  var m1 = "Developer";

 
  function myHello(){
     var n2 = "Engineering";
     var m2 = "FrontEnd"
     return this.n1 + " " + this.m1;
  }

  return this.n1+" "+this.n2;


}

console.log(world());


//browser
world() === window;



//======this is an anaonymous function that is a fucntion without a name========== 
let anonymousfunct = function(a,b){
  return a+b;
}
console.log(anonymousfunct(5,3));
let another = (a,b)=>{
  return a * b;

}
console.log(another(5, 5));



// ===========this is the lambda or arrow function==================== 



 arrowFunc = (a,b) => {
  return a * b;
}
console.log(arrowFunc(5, 6))


// 4=============-----------call() method with this keyword -----------=========== 

const person = {
 fullName :  function(address , age){
  console.log(this.firstName+ " " + this.lastName + " " + address + " " + age);
 }
}

 const person1 = {
  firstName : "AlphaCentuari  ",
  lastName : "Promethius"
 }

 const person2 = {
  firstName : "RedPlanet   ",
  lastName : "the Hive"
}
person.fullName.call(person1,"Anatnag", 23);
person.fullName.call(person2, "Sidco", 22);



// ===============================EVENTS==================== 
 


// =========================external events=======================================
const element = document.getElementById("btn");

element.addEventListener("click", myFunc);

let counter = 0;
function myFunc(){
  document.getElementById("demo").innerHTML += "  Al Muqeet Systems  ";
  // document.getElementById("demo").innerHTML.toUpperCase; 
  document.getElementById("demo").style.backgroundColor = "blue";
  // hTag.style.display = "inline";
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").style.textAlign= "center";
  document.getElementById("demo").style.borderRadius="20px"
  counter++;
  if(counter===5){
    document.getElementById("demo").innerHTML = "STPI";
    document.getElementById("demo").innerHTML = "";

  }
  console.log(document.getElementById("demo"));
}




//=========================inline using Events=====================================
var count = 0;
function func1(){
  let btnEle = document.getElementById("bttn");
  let hTag = document.getElementById("head");
  hTag.innerHTML += "Al Muqeet Systems  ";
  count++;
  hTag.style.backgroundColor = "yellow";
  hTag.style.color = "tomato";
  hTag.style.display="block"
  hTag.style.borderRadius="20px"

  if(count>4){
    hTag.innerHTML = "";
    hTag.innerText += "Software Technology Parks of India  "
    hTag.style.backgroundColor = "blue";
    // hTag.style.display = "inline";
    hTag.style.color = "white";
    hTag.style.textAlign= "center";
    hTag.style.borderRadius="20px"
   
  }
}


let inputEle = document.getElementById("head1");
let para = document.getElementById("head2");

function func2(e){
  // e.preventDefault();
  para.innerHTML= e.target.value;
  inputEle.style.color="white";
  inputEle.style.backgroundColor="grey";
  inputEle.style.width="100pxpx";
  inputEle.style.height="30px"
  // para.innerHTML=`${inputEle.innerHTML}`
}



//  =======================================localStorage======================

//localStorage is an object and it have functions/methods by default to perform different tasks. like getItem, setItem, removeItem and clear. 


let fname ;
localStorage.setItem(fname, "Aasifa");
console.log(localStorage.getItem(fname))
 
let lname;
localStorage.setItem(lname, "Ovaid");//this is for saving the key value pair in the localStorage object
console.log(localStorage.getItem(lname))

localStorage.removeItem(lname) // this is for removing the key value passing the key name as a paramter
console.log(localStorage.getItem(fname));//this is for geting/ reading the values of keys rfrom the localStorage object


console.log(localStorage.getItem(lname));

localStorage.clear();
console.log(localStorage.getItem(lname));
console.log(localStorage.getItem(fname));


// ====================JSON.Stringify() METHOD and JSON.parse() METHOD=========================

const myObj = {
  dog: "🐕",
  cat: "🐈",
  koala: "🐨",
  count: 3,
  co:"🧑‍🔬"

};

console.log(JSON.stringify(myObj));//this is for converting the obj. into string
// `output will be = {"dog":"🐕","cat":"🐈","koala":"🐨","count":3,"co":"🧑‍🔬"}`


console.log(JSON.parse(JSON.stringify(myObj)));//this is is used for converting the string into object
// `output will be = Object { dog: "🐕", cat: "🐈", koala: "🐨", count: 3, co: "🧑‍🔬" }
// ​
// cat: "🐈"
// ​
// co: "🧑‍🔬"
// ​
// count: 3
// ​
// dog: "🐕"
// ​
// koala: "🐨"`



// ============================3rd day 17th AudioProcessingEvent. 2023=============================



// ======================= CALLBACKS==============================
  function myDisplay(some){
   
     document.getElementById("div").innerText=some;
    // doc.innerText=some;
  }

  function mySum(a, b){
    let c = a + b;
    return c;
  }

  var total = mySum(9, 8);
  console.log(myDisplay(total))