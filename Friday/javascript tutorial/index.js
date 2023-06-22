console.log("Hello World");

const y = 2.5
const x = "Boris Johnson"
const w = false

// const x = 5
console.log("type of y =" ,typeof y)
console.log("type of x =" , typeof x)
console.log("type of w =" , typeof w)
console.log("type of f =" , typeof f)
console.log("type of s =" , typeof s)
let dob = document.getElementById('dob').value = "2023-04-09"

let names = ["stephanie", "yvonne", "Emmanuella", "Sarah", "Vicky"]
console.log(names[3])
console.log(names[names.length-1])
console.log(typeof names)
//unshift Array method
console.log("before")
console.log(names)

names.unshift('Joy')
console.log("after")
console.log(names)

console.log([...names, 'Joy'])

const cities = ["Lagos", "Las Vegas", "seoul", "Mumbai", "Paris"]
console.log("before slicing", cities)
const newCities = cities.slice(2)
console.log("after slicing", newCities)

const startEndoption = cities.slice(2, 4)
console.log("start and end option", startEndoption)

//slice() array method
const months = ['Jan', 'March', 'April', 'June']
console.log("original array", months)
months.splice(1, 0, "Feb")
console.log("splice with three param", months)
months.splice(4, 0, "May")
console.log("adding May", months)
months.splice(6, 5, "July", "Aug", "Sept", "Oct", "Nov", "Dec")
console.log("adding the remaining months", months)

//for loop
const numbers = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<numbers.length; i++){
    if(numbers[i]% 3 === 0){
        console.log(numbers[i])
    }
}
const myString = "Yvonne"
// console.log(myString.toUpperCase())

function addition(){
    let addNum = 4+3
}