//switch ----used for comparision  / condition

// let input=1;
// switch(input){
//     case 0:   //input===0  (if-else)
//         console.log('continue');
//     break;
//     case 'yes':
//         console.log('continue');
//     break;
//     case 'y':
//         console.log('continue');
//     break;
//     case 1:
//         console.log('end');
//     break;
//     case 'no':
//         console.log('end');
//     break;
//     case 'n':
//         console.log('end');
//     break;
//     default:{
//         console.log('wrong')
//     }
    
// }


//weekday
console.log('__________________________Weekday');
let weekday = 1;
switch(weekday){
    case 1:
        console.log('Monday');
    break;
    case 2:
        console.log('Tuesday');
    break;
    case 3:
        console.log('Wednesday');
    break;
    case 4:
        console.log('Thursday');
    break;
    case 5:
        console.log('Friday');
    break;
    case 6:
        console.log('Saturday');
    break;
    case 7:
        console.log('Sunday');
    break;
    default:{
        console.log('Error')
    }
}



//month
console.log('_______________________Months');

let month = 1;
switch(month){
    case 1:
        console.log('January');
    break;
    case 2:
        console.log('February');
    break;
    case 3:
        console.log('March');
    break;
    case 4:
        console.log('April');
    break;
    case 5:
        console.log('May');
    break;
    case 6:
        console.log('June');
    break;
    case 7:
        console.log('July');
    break;
    case 8:
        console.log('August');
    break;
    case 9:
        console.log('September');
    break;
    case 10:
        console.loge('October');
    break;
    case 11:
        console.log('November');
    break;
    case 12:
        console.log('December');
    break;
    default:{
        console.log('Error')
    }
}

//even and odd
console.log('________________________Even/Odd Number');

let num =7;
switch(num % 2){
    case 0:
        console.log('Even Number');
    break;
    case 1:
        console.log('Odd Number')
    break;
    default:{
        console.log('Error')
    }
}

//display traffic light
console.log('___________________________Trafic Light');

let traffic= 'red';
switch(traffic){
    case 'red':
        console.log('Stop')
    break;
    case 'yellow':
        console.log('Ready to stop')
    break;
    case 'green':
        console.log('Go')
    break;
    default:{
        console.log('Error')
    }
}


//convert grade to msg
console.log('_____________________Convert Grade To Msg');


let mark =80;
let grade;
switch(true){
    case mark>=90 && mark<=100:
        grade= 'A';
        console.log('Excellent');
    break;
    case mark>=80 && mark<=90:
        grade= 'B';
        console.log('Good');
    break;
    default:{
        console.log('Error')
    }

}

//categorize age group
console.log('_________________categorize age groups ');

let age =83;
switch(true){
    case age>=0 && age <= 12:
        console.log('Child');
    break;
    case age>=13 && age <= 19:
        console.log('Teenager');
    break;
    case age>=20 && age <= 39:
        console.log('Adult');
    break;
    case age>=40:
        console.log('Senior Citizens');
    break;
    default:{
        console.log('Error')
    }
}

//Covert digit into its word form
console.log('_______________________Covert digit into its word form');
let word=2
switch(word){
    case 0:
        console.log('Zero')
    case 1:
        console.log('One');
    break;
    case 2:
        console.log('Two');
    break;
    case 3:
        console.log('Three');
    break;
    case 4:
        console.log('Four');
    break;
    case 5:
        console.log('Five');
    break;
    case 6:
        console.log('Six');
    break;
    case 7:
        console.log('Seven');
    break;
    case 8:
        console.log('Eight');
    break;
    case 9:
        console.log('Nine');
    break;
    default:{
        console.log('Error')
    }
}



//covert temperature units
console.log('______________________covert temperature units');

//num positive, negative, zero
console.log('____________________num positive, negative, zero');
let num1=-11
switch(true){
    case num1==0:
        console.log('Zero')
    break;
    case num1>0:
        console.log('This is positive number')
    break;
    case num1<0:
        console.log('This is negative number')
    break;
    default:{
        console.log('Error')
    }
}



console.log('__________________________Display meal time');
