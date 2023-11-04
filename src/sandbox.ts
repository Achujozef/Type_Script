// const inputs = document.querySelectorAll('input');
// console.log(inputs)

// inputs.forEach(input =>{
//     console.log(input.value)
// })

// const circ = (dia:number)=>{
//     return dia * Math.PI;
// }

// console.log(circ(9.5))

//arrays

//  let names = ['achu','jozef','S L']

// names.push('Achu')
//names.push(7)
// names[0]='Joxzef'
// names[1]=10

// let mixed =[10,'Achu',20,'Jozef']

// mixed.push('S L')
// mixed.push(30)
// mixed[0]='Bahubali'
// mixed[1]=40

// let obj = {
//     name:'Achu',
//     age:24,
//     place:'Kattakada'
// }

// obj ={
//     name:95,
//     age:'Achu',
//     place:95
// }

//Explicit Types

// let character : string
// let age : number
// let isLOgged:boolean

// //age='Achu'
// age=24

// //isLOgged=55
// isLOgged=true

//array of string
let ninjas:string[]=[]
ninjas.push('Achu')
console.log(ninjas)
let mixed:(string|number)[]=[]
mixed.push('Achu')
mixed.push(85)
console.log(mixed)


let uid: string|number
uid=123
uid='Achu'

let One:object
One={name:'Achu',age:25}

let Two:{
    name:string,
    age:number,
    belt:string
}
Two={name:'Achu',age:20,belt:'Black'}

//Dynamic (any) Types
let amazing: any =25

// amazing=true
// console.log(age)
// amazing='hello'
// console.log(age)
// age=999
// console.log(age)

let mixobj:{name:any,age:any}

mixobj={name:'Achu',age:28}
console.log(mixobj)
mixobj={name:88,age:'Achu'}
console.log(mixobj)