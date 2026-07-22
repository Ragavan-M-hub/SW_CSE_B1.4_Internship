var x = 10
var x = 20
x = 30
console.log(x)

if(true){
    var message = "Hello"
}
//var is not block scoped
console.log(message)

//let
let score = 100
// let score = 200 ERROR
score = 160

console.log(score)

if(true){
    let secret = "hello"
}
//let is block scoped
console.log(secret)

//const
if(true){
    const pi=3.1415
    // pi=22 ERROR
}
//const is block scoped
console.log(pi) //ERROR