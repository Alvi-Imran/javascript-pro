
// Constructor 
const arra = new Array(10); // 10 empty / lekin jab ham string mai "Hello" to koi empty nahi ata
// console.log(arra);


// Literal (sabse jada use hota hai)
const literal = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// console.log(literal);


// Array.of() method
const x = Array.of(25);
const b = Array.of(2, 5, 23, 45);
// console.log(x,b); // X = 25 , b = 2,5,23,45

//   Using Array.form()
const s = Array.from("hello");
// console.log(s);




// using Spread Operator (...)
const fis = [220, 100, 352];
const copy = [...fis]
copy.push(25);
// console.log(fis, copy)
// console.log(fis);

const one = [25, 50, 75, 100];
const two = [5, 10, 15, 20];
const result = [...two, ...one]
result.push(99)
// console.log(result , one);


// array refernce 
const num1 = [10, 20, 30, 40, 50];
const num2 = num1;
// console.log("num1 " + num1);
// console.log("num2 " + num2)

num2.push(88); // only update num2

// console.log("update2 "+ num2);
// console.log("update1 "+ num1);

// console.log("num1 + num2 " + num1 + num2);


let shiftarray = [52, 66, 35, 43, 63, 75];
// console.log(shiftarray[2]); // [] ye sirf starting index se sru karta hai
// console.log(shiftarray.at(2)); // .at() ye normal sirf starting index se sru karta hai
// console.log(shiftarray.at(-2)); //  .at() ye sirf ending index se sru karta hai


//  -------------  Array Search Methods -----------------//

let data = ["mobile", "laptop", 499, "tablate", 452.5, 499, 1025, "laptop", 800, 1425];

// -- add new element .lenght -- //
// data[data.length] = "Lemon";
// data[data.length] = 50;  
// data[data.length] = true;
// console.log(data);

//  indexOf() ye sureat index value check kart hai
//  console.log(data.indexOf(499)); // 2 (499 pelhi baar index 2 par mila)
//  console.log(data.indexOf(599)); // -1 (599 exite hi nahi kar ta)


//  lastIndexOf() ye method array ki last value ko deta hai
//  console.log(data.lastIndexOf(499)); // 5 (499 last index 5 par mila)
//  console.log(data.lastIndexOf(599)); // -1 (599 exite hi nahi kar ta)


//  include() ye check karta hai ki array may ye element/value hai ki nahi  (rturn = true/false)
//    console.log(data.includes("mobile")) // true
//    console.log(data.includes("game")) // fales

/*let userinp = prompt("enter")
let check = data.includes(userinp)

if(check === true){
      console.log("ye element array mai he");
} else{
        console.log("ye element array mai nahi hai");      
} */


//  find() ye method array me se pehla element return karta hai jo condition ko satisfy kare. (agar nahi milta to undefined.)
let founddata = data.find((el, ind, arr) => {
        return el === 499;
});
// console.log(founddata); // 499 (ye hai )

let undData = data.find((el, ind, arr) => {
        return el === 509;
});
// console.log(undData); // undefined (ye value nahi hai)

//  findIndex() ye method condition match karne wale pehle element ka index return karta hai. (agar nahi milta to -1.)
let arrayIndex = data.findIndex(ind => ind > 460);
// console.log(data , arrayIndex); // 2 \


let noArray = data.findIndex(el => el == 500);
// console.log(data,noArray); // -1 (ye element array mai nai hai)

// findLastIndex() ye method condition match karne wale last element ka index return karta hai. (agar nahi milta to -1.)
let findlastind = data.findLastIndex(el => el == "laptop");
// console.log(data,findlastind); // last index 7 

let notfindlastindex = data.findLastIndex(el => el == 500);
// console.log(data, notfindlastindex); // -1 array ke last element nahi milta to -1 return karta hai

// findLast() array me last element ko return karta hai jo given condition satisfy kare.
// console.log(data,data.findLast(el => el == 499)) // ye last element hai 
// console.log(data,data.findLast(el => el == 455)) // undefined jab array mai element nai milta tab (undefiend)


// --------- JavaScript Array Sort ------------
// 1) Alphabetic Sort => Array.short(), Array.reverse(), Array.toSorted(), Array.toReveses(), Array Object

let fruits = ["Banana", "Mango", "Apple", "Orange"];
// console.log(fruits);  
// console.log(fruits.sort()); // sort() ye element ko Alphabetic Sort mai sort karta hai (-- A-Z --) (ye original array ko badal deta hai) 
// console.log(fruits.reverse()); // reverse() ye array ko reverse karta hai yani ki array ko ulta (-- Z-A --)
// console.log(fruits.toSorted()); // toSorted() ye original array ki new copy banta hai (-- A-Z --) (ye original array ko nahi badal tah hai)
// console.log(fruits.toReversed()); // toReversed() ye original array ki new copy banta hai (-- Z-A --) (ye original array ko nahi badal tah hai)

// ----- Array Object ---- //
let objdata = [
        {
                name: "imran",
                age: 25,
                job: "No Job"
        },
        {
                name: "vikas",
                age: 24,
                job: "working"
        },
        {
                name: "amit",
                age: 26,
                job: "working"
        },
        {
                name: "manoj",
                age: 23,
                job: "No Job"
        }
];
// console.log(objdata);


// sort object array method 
// let objsort =  objdata.sort((el , index) => el.age - index.age); // Numbers → (a, b) => a.key - b.key
// let objsort1 =  objdata.sort((el , index) => el.name.localeCompare(index.name));  // Strings → (a, b) => a.key.localeCompare(b.key)
// console.log(objsort);
// console.log(objsort1);

// toSorted object array method

// let tosortdObj = objdata.toSorted((a,b)=> a.name.localeCompare(b.name)); ye array object ka copy array bana deta hai (string -> .localeCompare())
// let tosortdObj1 = objdata.toSorted((a,b)=> a.age - b.age); // Numbers → (a, b) => a.key - b.key
// console.log(tosortdObj1);


let arraymethod = [1, 2, 3, 4, 5, 6, 7, 8, 9, "manoj"];


let currentindex = 0;
let showitme = 3;

function show(){
        if(currentindex >= arraymethod.length){
                return         
        }
        let getitme = arraymethod.slice(currentindex, currentindex + showitme);
        console.log(getitme);
        // console.log(currentindex);
        currentindex += showitme        
}






// console.log(arraymethod);










