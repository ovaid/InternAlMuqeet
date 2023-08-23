
//=====================================practising the varibales in  javaScript========================================
  
// =========================--------------------------->DAY 1<------------------------==================== 

var rameez = "hii javaScript";

var bool  = true;
if(!false){
    rameez = "heyya"
     console.log(rameez)
      rameez = "hello"
      rameez = "this is js"
     console.log(rameez);
}
console.log(rameez)



let ovaid = "Hi Al Muqeet";

var bool  = true;
if(!false){
    console.log(ovaid)
      ovaid = "ALMS"
      console.log(ovaid)
       ovaid = "STPI"
      let ovaids = "Al Muqeet js"
    console.log(ovaids);
}
console.log(ovaid);




const muqeet = "constant key word usingAl Muqeet";

const boolean  = true;
if(!false){
    console.log(muqeet)
    //   muqeet = "const key word ALMS"
      console.log(muqeet)
    //   muqeet = "const key word STPI"
    //   muqeet = "const key word Al Muqeet js"
    console.log(muqeet);
}
console.log(muqeet)


//========================================obeject with arrays and objs inside==========================================

let obj  = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }


//===================================================// DOT NOTATIONS PRACTISE==================================
  console.log(obj.members[1]);



//=====================================================forEACH loop=============================================
//best one to run faster is simple for loop ans forEach loop is heavier than simple for loop in time complexity==============
  let arr = [1, 2, 3, 4, 5, 6, 7];

  arr.forEach((curr, index) => {
    console.log("current element is : "+ current);
    console.log("current index is : "+ index);
  })



//=========================================================== LITERALSPRACTISE==================================
// we can not use arrow function with literals because Arrow functions cannot be used as constructors. Calling them //with new throws a TypeError . They also don't have access to the new.target keyword.

function myName(name, info, work){
    return `My name is ${name}, i live in ${info} and i am a  ${work}`;
  }
  console.log(myName("Rameez", "Anatnag", "softwareDeveloper"));
  
  
  
  
   function hello(name, work, company){
     return `My name is ${name}, i am working as ${work} and i worked in ${company}` 
   }
   
   console.log(hello("Ovaid", "Software Developer", "Al-Muqeet-Sysytems"));
  
  

   //===========================================Date DataTypes========================================]
    
console.log(new Date());  //o/p ===(2023-08-14T11:49:28.778Z)  //this will take the paramter as string (date) and print the parameter as op. it will also print the date only 
consol.log(Date())// o/p ===> (Mon Aug 14 2023 11:50:07 GMT+0000 (Coordinated Universal Time)) //this will print the current date by default;

console.log(new Date(year,month))
console.log(new Date(year,month,day))
console.log(new Date(year,month,day,hours))
console.log(new Date(year,month,day,hours,minutes))
consol.log(new Date(year,month,day,hours,minutes,seconds))
console.log(new Date(year,month,day,hours,minutes,seconds,ms))

console.log(new Date(milliseconds));

// we can pass year month day hours minutes seconds and milliseconds as paramters and prints them





//=============================use of THIS KEYWORD=================================================





  // let rootElement = document.getElementById("root");

  // obj1.forEach(data => {
  //   rootElement.innerHTML = obj1;
  //   console.log(...data, data.age);
  // })
 