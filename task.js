// 1)Write a JavaScript function that checks if a given number is positive, negative, or zero.
//  Display the result in the console
let num = 0;
switch(true){
    case num>0:
        console.log('Number is Positive')
    break;
    case num<0:
        console.log('Number is Negative')
    break;
    case num==0:
        console.log('Number is zero')
    break;
    default:{
        console.log('Given value is unvalid')
    }
}

let num1=5;
if(num1==0){
    console.log('Number is zero')
}else if(num1>0){
    console.log('Number is positive')
}
else if(num1<0){
    console.log('Number is negative')
}else{
    console.log('error')
}


// 2)Write a for loop to print all the numbers from 1 to 100 that are divisible by both 3 and 5.

for(let a=1; a<=100; a++){
    if(a%3==0 && a%5==0)
        console.log(a)
}


// 3)Create a simple JavaScript program using prompt and confirm:
// -Ask the user for their name using prompt.
// -Ask the user if they want to continue with confirm.
// -If they click "OK", display a message with their name. If they click "Cancel", say goodbye.

// let name1=prompt('Enter Your name')
// let name2=confirm(name1)
// if(name2){
//     document.write('Your name is: '+name1)
// }else{
//     document.write('Goodbye')
// }



// 4)Given an age, classify the person into one of the following categories:
// -0-12: "Child"
// -13-17: "Teen"
// -18-64: "Adult"
// -65+: "Senior"
let age =prompt('Enter your age: ');
switch(true){
    case age>=0 && age<=12:
        document.write('Child')
    break;
    case age>=13 && age<=17:
        document.write('Teen')
    break;
    case age>=18 && age<=64:
        document.write('Adult')
    break;
    case age>=13 && age<=17:
        document.write('Senior')
    break;
    default:{
        document.write('error')
    }
}


// 5)Given a number (1-7), display a suggested activity for that day. For example:
// 1: "Go to the gym"
// 2: "Attend meetings"
// 3: "Work from home"
// 4: "Attend class"
// 5: "Family time"
// 6: "Rest day"
// 7: "Outdoor activities
let activity =1;
switch(activity){
    case 1:
        console.log('Go to the gym')
    break;
    case 2:
        console.log('Attend meetings')
    break;
    case 3:
        console.log('Work from home')
    break;
    case 4:
        console.log('Attend class')
    break;
    case 5:
        console.log('Family time')
    break;
    case 6:
        console.log('Rest day')
    break;
    case 7:
        console.log('Outdoor activities')
    break;
    default:{
        console.log('Error')
    }
}

// 6)Use a for loop to print the multiplication table for a given number n (up to 10)
// for(let table1=1; table1<=10;table1++){
//    for(let n=1; n<=10; n++){
//     document.write(table1*n +'<br/>')
//    }
//    document.write('<br/>')
// }

// 7)Use prompt to ask for the user's name and age. Use confirm to verify that the user wants to submit the data. If confirmed, display a message with their name and age.
// let username=prompt('Enter your name')
// let age =prompt('Enter your age')
// let verify =confirm('Username: ' +username + ' Age: '+age)
// document.write('Username: ' +username + ' Age: '+age)