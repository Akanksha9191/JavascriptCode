
//
// ___________________________________default 
function greeting(a="hello"){
    console.log(a)
}
greeting()

function greeting1(a="hello"){
    console.log(a)
}
greeting1("World")

//__________________________ rest parameter
// function num(a, b, ...c){
//     console.log(a, b, c)
// }
// num(2,3,6,6,9,10)

// function num(a, b, ...c){
//     console.log(c)
// }
// num(2,3,6,6,9,10)

function sum(...c){
    let sum1 =0;
    for(let i =0; i<c.length; i++){
        sum1 +=c[i]
    }
    return sum1;
}
console.log(sum(10,2, 7 ,9 ,4 ,5))

//__________________________________________spread operator
//used spread operator for concat
// let array = [12, 23, 34, 5 ,6]
// let array2 = [1, 2, 2, 5,3, 3]
// let array1 = [...array, 3, 4, 5, 8, 10, ...array2]
// console.log(array1)

//__________________________________________array destructing
// let book = ["Javascript", 300, 500]
// console.log(book[0])
// let name1 = book[0]
// let price= book[0]
// let page = book[0]

let book = ["Javascript", 300, 500, ["nodejs", "express.js"]]
let [name1 , price , page, [frame1, frame2]] =book;
console.log(book)
console.log(name1)
console.log(price)
console.log(frame1)

let obj1 ={
    name:"Akanksha",
    age:22,
    city:"Pune"
}
// console.log(obj1.age)
let {name:title, age, city} = obj1
// console.log(name)
console.log(title)


//_____________________________template letrial
// let title1 ="Javascript /n Session"
// console.log(title1)
let title1 =`Javascript 
Session`
console.log(title1)

// console.log("This is" , + "" + title1, +"" +".")
console.log(`This is ${title1}.`)