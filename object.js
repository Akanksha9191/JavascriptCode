// let obj1 ={
//     name:'Akanksha',
//     age:22,
//     gender: 'female',
//     city:'Pune'
// }
// // console.log(obj1)
// console.log(obj1.name)

//-------------Another way
// let obj =new Object()
// obj.name='Akanksha'
// obj.age=22

// console.log(obj)

// access function
// let obj1 ={
//     name:'Akanksha',
//     age:22,
//     gender: 'female',
//     city:'Pune',
//     greet : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     }
// }
// console.log(obj1.greet())


///-------array and function
// let obj2={
//     greet : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     },
//     marks:[22, 2, 4,5]
// }
// console.log(obj2.marks[1])

// let obj1 ={
//     name:'Akanksha',
//     age:22,
//     gender: 'female',
//     city:'Pune',
//     greet : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     },
//     obj2:{
//         name1:'Bhalsing',
//         age:22,
//     }
// }


// console.log(obj1.obj2)

// let obj1={
//     name:'akanksha',
//     city:'Pune'
// }
// console.log(obj1)

// document.getElementById('demo').innerHTML='Akanksha'        ///dom.html



//------------------for in ||for of
// let names={
//     name1:'akanksha',
//     age:22
// }
// for(let a in names){
//     // console.log(a)
//     console.log(a, names[a])
// }
// for(let a of Object.values(names)){
//     // console.log(a)
//     console.log(a)
// }


//_____________________________________Math object
// //math pi
// let a=Math.PI
// console.log(a)
// //math random
// let b=2.5
// console.log(Math.random(b))
// //math round
// let c=2.5
// console.log(Math.round(c))
// //math.ceil
// let d=2.3
// console.log(Math.ceil(d))
// //math.floor
// console.log(Math.floor(d))
// //math.pow
// console.log(Math.pow(2,4))
// //trunc
// console.log(Math.trunc(3.44446))

//____________________________________date object
//year , month(index no.), date, hour, min, sec , ms
//for day (index no.)sunday to sat

let a = new Date(2025, 0, 12, 23, 34, 67 )
// console.log(a)
// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getTime())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds(0))
// console.log(a.getMilliseconds())

// a.setFullYear(2028)
// a.setMonth(11)
// console.log(a)
// a.setDate(8)
// console.log(a)
// a.setTime(12)
// console.log(a)
// a.setHours(11)
// console.log(a)
// a.setMinutes(45)
// console.log(a)
// a.setSeconds(0)
// console.log(a)
// a.setMilliseconds(0)
// console.log(a)

let obj1={
    name:'akanksha'
}
console.log(obj1.hasOwnProperty('name'))