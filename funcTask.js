// Write a function that takes two numbers as input and returns their sum.
function sum1(a , b){
    return a + b; 
}
console.log(sum1(23, 45))


// Write a function to find the maximum of two numbers.
function max(a,b){
    if(a<b){
        console.log('Maximum number:' , b)
    }else{
        console.log('Maximum number:' , a)
    }
}
max(34, 2)

// Create a function that checks if a number is even or odd.
function num1(a){
    if(a%2==0){
        console.log('Even number')
    }else{
        console.log('Odd Number')
    }
}
num1(41)
// Write a function that takes a string and returns its length.
function str(b){
    return b.length
}
console.log(str('Akanksha'))

// Write a function that reverses a given string.
function str1(c){
    return c.split('').reverse().join('')
}
console.log(str1('Bhalsing'))

// Implement a function to check if a given string is a palindrome.
function palindrome(str2){
    let num2=str2.toLowerCase()
    let num3 = num2.split('').reverse().join('')
    return num2 === num3
}
console.log(palindrome('Nan'))

// Create a function to return the sum of all elements in an array.
let result=[20, 10, 30]
function ele(sum2){
    let sum3 =0
    for(let i=0; i<sum2.length; i++){
        sum3=sum3+sum2[i]
    }
    return sum3;
}
console.log(ele(result))



// Create a function to capitalize the first letter of each word in a string.






// (Settimeout and Setinterval)
// Write a function that logs a message to the console after 3 seconds.
// setTimeout(function(){
//     console.log('Welcome to coding world')
// }, 3000)

// Create a function that displays an alert with a message after 2 seconds.
// setTimeout(()=>{
//     alert('Welcome to coding world')
// }, 2000)

// Write a function that changes the content of a paragraph with id="text" to "Changed after 5 seconds" after 5 seconds.


// Write a function that shows the message "Action completed!" after a 4-second delay.
// setTimeout(()=>{
//     confirm('Action completed')
// },4000)

// Write a function that logs two different messages with a 2-second delay between them.


setTimeout(()=>{
    console.log('Message 1')
},2000)
console.log('Message 2')

   
// // Write a function that logs two different messages with a 2-second delay between them.

