//objects

var customer ={
    firstName: 'John',
    lastName: 'Smith'
}
//Dot notaion
customer.firstName="Mike"
customer.lastName="sonam"
//bracktet notation
customer['lastName']='silver'
console.log(`${customer.firstName} ${customer.lastName}`)
console.log(customer.firstName)

//array
var car = ['volvo', 'Toyota','Testa']
console.log(car[1])
car[1] = "BMW"
console.log(car[1])

var x=1
console.log(x == '1')// lose compaarison(only compare left and right)
console.log(x === '1')// strict comparison(compare left & right with types coparison)

//array looping
 var cars=["Volvo","Toyota","Tesla"]
 for(let car of cars){
    console.log(car)
 }// is same as
  //ES6 syntax for each loop
  cars.forEach(car =>{
    console.log(car)
  })

  // decreative function
  // anoymous function
  // arrow function

  function number(n){
    result= n*2
    return result
  }
  var resutls=number(4)
  console.log(resutls)