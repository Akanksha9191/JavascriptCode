// let names =[1, 'A', 'B', 'C']
// console.log(names)

// let c='abc'
// console.log(Array.isArray(c))
//console.log(names.length) //how to check lenght
//console.log(names[3])
//shift -
//names.shift()
//names.pop()
//names.push('Bhalsing')
//names.unshift('Akanksha')

// names.splice(2, 0, 'II', 'VII')
//(stratindex no. , how many values deleted )

//names.splice(2, 2)

//slice

// let a=names.slice(1,4)
// console.log(a)


//find index number
//console.log(names.indexOf('A'))

// let b =names.indexOf('A')  //with create 
// console.log(b)


//split  used for covert string into array
// let names='My name is akanksha'
// console.log(names)
// // let a=names.split("")  //for single letter
// let a =names.split(" ") // for single word
// console.log(a)

//join used for convert array to string
// let names=['Abc','xyz']
// console.log(names)
// let a=names.join('')
// console.log(a)

//concat used for join two array in one variable
// let name1 =['Akanksha', 'Bhalsing']
// let name2 =['anushka']
// let a=name1.concat(name2)
// console.log(a)

//sort  
// let a=[5, 6,1,3]
// console.log(a.sort())






// let names=['akanksha','bhalsing','aditi']
// console.log(names)
// //how to replace / or update value 
// names[2]='krushna'


// let a=['akanksha','ram', 'riya', 'ketki','grantha','arjun','avinash', 'raj', 'tushar', 'nikita']
// let b=a.join('');
// console.log(b)
// for(let b=a.join(''); b>=10; b++){
//     console.log(b)
// }


// let b=['akanksha','ram', 'riya', 'ketki','grantha','arjun','avinash', 'raj', 'tushar', 'nikita']

// for(let a = 1; a <=b.length; a++){
//    document.write(b[a])
// }


// let a = [1,2,3,4,5,6,7]
// let c=0;
// for(let b=0; b<a.length; b++){
//     c=c+a[b];
  
// }
// console.log(c)

//Find the Length of an Array
// let len1 =[1, 2,3,4,5,6]
// console.log(len1.length)

// //Access an Element in an Array
// console.log(len1[2])
// //Create an array, update the third element, and print the updated array.
// let array2 =[1, 2,3,4,5,6]
// console.log(array2)
// array2[3]='Akanksha'
// console.log(array2)

// //Create an array, add a new element to the end of the array, and print the updated array.
// let array3 =[1, 2,3,4,5,6]
// array3.push('Bhalsing')
// console.log(array3)

// console.log('Create an array, remove the second element, and print the updated array')
// array3.splice(2,2)
// console.log(array3)
// // Create an array of numbers and find the sum of all the numbers.
// let a=[3,5,1,7,0,2]
// let sum=0;
// for(let b=0; b<a.length; b++){
//     sum =sum+a[b]
// }
// console.log(sum)
// // Create an array of numbers and sort it in ascending order.
// let sort1=[3,5,11,70,0,2]
// console.log(sort1.sort())

// let furites  = ["banana", "Apple", "Pineanpale","Orange", "Grapes", "Watermelo"];
// furites.splice(4,1)
// console.log(furites)


//table
// let table=0;
// let table2=2;
// for(let table1=1; table1<=10;table1++){
//     table=table2*table1;
//     console.log(table)
// }

// for(let a=1; a<=10; a++){ 
//     console.log(a*2)
// }

// for(let b=1; b<=10; b++){
//     document.write(`2*${b}=${b*2}` +"<br/>")
// }


//---------------------For in || for of
let array1=[23, 45, 67, 89]
for(let a of array1){
    console.log(a)

}
// let array1=[23, 45, 67, 89]
// for(let a in array1){
//     // console.log(a)
//     console.log(a, array1[a])
// }

                