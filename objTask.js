// Create an object representing a person with the following properties:
// name: "John"
// age: 30
// address:
// street: "123 Main St"
// city: "New York"
// zip: "10001"
let obj1 ={
    name: "John",
    age: 30,
    address:'Wing-A, Flat-101',
    street: "123 Main St",
    city: "New York",
    zip: "10001"
}
console.log(obj1)
// Task 4: Object Methods
// Create an object representing a car with the following properties:
// make: "Toyota"
// model: "Corolla"
// year: 2020
// Add a method to the car object called getCarInfo() that returns a string with the car's information (e.g., "2020 Toyota Corolla").
let car={
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo:function(){
        console.log(`${this.year} ${this.model} ${this.make}`)
    }
}
console.log(car.getCarInfo())



// Task 5: Object Destructuring
// Create an object representing a student with the following properties:
// name: "Alice"
// age: 22
// major: "Computer Science"
// Use object destructuring to extract the name and major properties into variables and log them to the console.

// Task 6: Iterate Over Object Properties
// Create an object representing a product with the following properties:
// name: "Laptop"
// price: 1200
// inStock: true
// brand: "Dell"
// Use a for...in loop to iterate over the object's properties and log each property and its value to the console.
let product={
    name: "Laptop",
    price: 1200,
    inStock: true,
    brand: "Dell"
}
for(let pro1 in product){
    console.log(pro1, product[pro1])
}

// Task 7: Check if Property Exists in an Object
// Create an object representing a user with the following properties:
// username: "johndoe"
// email: "john@example.com"
// // isAdmin: false
let user={
    username: "johndoe",
    email: "john@example.com",
    isAdmin: false
}
console.log(user.hasOwnProperty('email'))