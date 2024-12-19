//    /t one tab space
//     /n   break word to next line
// legnth also occupy space

// substr
// substring
// trim   imp



let word ='This is Javascript session is'

// legnth also occupy space
console.log(word.length)
// touppercase()
console.log(word.toUpperCase())
// tolowercase()
console.log(word.toLowerCase())
// startsWith()   return boolean value
console.log(word.startsWith('This'))
// endsWith()     return boolean value
console.log(word.endsWith('session'))
// includes()  return boolean value   search value as it is then give true false
console.log(word.includes('Java'))
// search()   return position  
console.log(word.search('Java'))

//match  read all string and how much same words available 
console.log(word.match(/is/g))   //find globally and o/p show in array     /is/g __> expression

//indexof()  index number return
console.log(word.indexOf('is'))
//lastIndexOf()  suppose two same word are in string , we want index no. of last word
console.log(word.lastIndexOf('is'))

//replace
console.log(word.replace(' is ' , ' are ')) //replace single word
console.log(word.replace(/ is/g , ' are')) //for all

//charAt add index value and return o/p char
//slice(startwith , end)
//substr() (start with, after start with length) to start with up to after length count
//substring(start, index no count to 0 index)

//toString()   --convert array or number to string

//charAt() give index number  return only index number value available


