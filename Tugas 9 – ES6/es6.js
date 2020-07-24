// NOMOR 1

console.log("NOMOR 1")
// const golden = function goldenFunction(){
//   console.log("this is golden!!")
// }
const golden = ()=>{
	console.log("this is golden!!")
}
golden()


// NOMOR 2

console.log("NOMOR 2")
// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//       return 
//     }
//   }
// }

const newFunction = (firstName, lastName)=>{
	return {
		firstName,
		lastName,
		fullName : ()=>{
			console.log(firstName + " " + lastName)
			return
		}
	}
}
//Driver Code 
newFunction("William", "Imoh").fullName() 


// NOMOR 3

console.log("NOMOR 3")
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

const {firstName, lastName, destination, occupation} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)


// NOMOR 4

console.log("NOMOR 4")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
//const combined = west.concat(east)
const combined = [...west, ...east]
//Driver Code
console.log(combined)


// NOMOR 5

console.log("NOMOR 5")
const planet = "earth"
const view = "glass"
// var before = 'Lorem ' + view + 'dolor sit amet, ' +  
//     'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
//     'incididunt ut labore et dolore magna aliqua. Ut enim' +
//     ' ad minim veniam'
var before = `Lorem ${view} dolor sit amet consectetur adipiscing elit` + 
	`${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim` +
    ` ad minim veniam`
// Driver Code
console.log(before) 