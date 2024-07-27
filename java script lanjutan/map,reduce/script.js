
const angka = [1,3,4,5,6,7,2,8,6,9]
// // loop for
// let angkaGenap = []
// for(let i = 0 ; i < angka.length;i++){
//     if(i % 2 == 0){
//         angkaGenap.push(i)
        
//     }
// }

// console.log(angkaGenap)


// filter

// const newAngka = angka.filter((a) => a >= 3)


// const angkaGenap = angka.filter((a) => a % 2 == 0)

// console.log(newAngka)
// console.log(angkaGenap)

// map

// const newAngka = angka.map(a => a * 2)
// console.log(newAngka)
// console.log(angka)


// const newAngka = angka.reduce((accumulator, curentValue) => accumulator + curentValue)
// console.log(newAngka)

// method chaining 

//


const hasil = angka.filter(a => a >= 5)
    .map(a => a * 3)
    .reduce((acc,cur) => acc + cur)



console.log(hasil)


const angkaGenap = angka.map(a => a % 2 == 0 ? "genap" : "ganjil")
console.table(angkaGenap)


