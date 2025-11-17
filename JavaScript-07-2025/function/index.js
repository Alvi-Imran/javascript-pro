// www.tpointtech.com

// function without return console ham function ke bhar nahi kar sakte function ke asnder kar sakte hai
function call(n) {
  let a = 25;
  console.log(a + n);
}
// call(5)
// call(30)
// call(50)


// function with return; console ham function ke bahar use kar sakte hai aur function ke kander  
// console.log(myfun(50)) // function ko hoisting kar sakte hai
function myfun(done) {
  let age = 50;
  let pin = 100;
  let total = age + pin;
  // console.log("total"+total );      
  return total - done;
}
// console.log(myfun(25))
// let d = myfun(50);
// console.log(d);



// function ko virable mai assign kar kar chalana
// gos(50) // not hoisting 
let gos = function (b) {
  let a = 25;
  let result = a + b;
  console.log(result);
}
//gos(78)


// ----  Arrow function normal  -----

let arrowfun = (s) => {
  let score = "Score ";
  return score + s
}
// console.log(arrowfun(25))



// ------- Method function ------ //


// object mai function kese dete hai 

let game = {
  car: "Alto",
  start: function () {
    let km = "km";
    let speed = 120;
    return "speed " + speed + km
  },
  stop: function () {
    console.log("Alto Stop");
  }
};
// console.log(game.start()); // lekin jab ham value ko return karte hai jab log karne ki jaru  rat nahi hai
// game.stop() // jab ham function ke ander console.log use karte hai tab daryket call kar sakte hai




let data = [25, 35, 94, 35, 36, 74, 2, 3];

// for in loop ye sirf index deta hai 
for (let i in data) {
  // console.log(i);
}


// for of loop ye sirf value/element deta hai    
for (let i of data) {
  // console.log(i);
}










































