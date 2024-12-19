


alert('Welcome')

//prompt("Enter Your name") | if you want add value prompt("Enter Your name" , 21) 
let name1 = prompt("Enter Your name")
if(name1){
    document.write('Your name is ' + name1)
}else{
    document.write('Please Enter Your name')
}

//confirm('Are you sure to delete msg')
let del = confirm('Are you sure to delete msg')
if(del){
    document.write('MSG has been deleted')
}else{
    document.write('MSG has been not deleted')
}

