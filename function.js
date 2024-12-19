// function new1(){
//     for(let i=1; i<=10; i++){
//         document.write(`${i} X = ${i*2}`)
//         document.write('</br>')
//     }
// }
// new1()
// new1()

// function new1(sum)//parameter 
// {
//     for(let i=1; i<=10; i++){
//         document.write(`${sum} X ${i}= ${i*2}`)
//         document.write('</br>')
//     }
// }
// new1(2)//argument
// document.write('</br>')
// new1(4)

// function add(a,b){
//     // let z=(a+b)
//     // return z
//     // console.log(a+b)
//     return a+b
    
// }
// //addition
// let c=add(2,4)
// console.log(c)
// //divison
// function division(a,b){
//     return a/b
// }
// let d=division(35,9)
// console.log(d)
// //substraction
// function sub(a, b){
//     return a-b
// }
// let e=sub(2,4)
// console.log(e)
// // multiplication
// function multi(a,b){
//     return a*b
// }
// let g=multi(4,5)
// console.log(g)


// let a='Akanksha' //global variable
// function add(){
//     let b ='Bhalsing'//local variable
//     console.log(b)
// }
// add()
// console.log(a)//global



//anonymus function         without function name
// let names=function(){
//     console.log('Hello world')
// }
// names()

// setTimeout(function(){
//     console.log('Hello world')
// }, 3000)

//arrow function without function keyword ,function name
// setTimeout(()=>{
//     console.log('Hello world')
// }, 4000)

// setInterval(()=>{
//     document.write('Hello World')
// },2000)

// function add(a, b){
//     return a+b
// }
// let c=add(3,4)
// document.write(c)

// function num1(str){
//    return str.split('').reverse().join('')
// }
// let a=prompt('enter name to reverse')
// document.write(num1(a))

// function num1(a){
//     if(a%2==0){
//         document.write('Even Number')
//     }else{
//         document.write('Odd number')
//     }
// }
// num1(4)

// function reversenum(val){
//     return val.split('').reverse().join('')
// }
// let results=reversenum('Akanksha')
// document.write(results)

// function num1(str){
//    return str.toUpperCase('')
// }
// let a=prompt('enter name')
// console.log(num1(a))

// function num1(str){
//    return str.length
// }
// let a=prompt('enter name')
// console.log(num1(a))


// setInterval(function(){
//     document.write('Hello world')
// }, 2000)


function name1(a){
    return a.split('').reverse().join('')
}
console.log(name1('AKANKSHA'))
