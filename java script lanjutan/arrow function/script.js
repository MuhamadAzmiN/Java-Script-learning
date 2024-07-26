const tampilPesan = function (nama){
    return `Halo ${nama}`
}

tampilPesan("Muhamad Azmi Naziyulloh")


//
// const tampilNama = (nama) => {return `Halo , ${nama}`}
// console.log(tampilNama("Azmi"))

// const tampilNama = (nama, waktu) => {
//     return  `Halo ${nama} Selamat ${waktu}`
// }
//
// console.log(tampilNama("azmi", "siang"))


const tampilNama = nama => {return `Halo , ${nama}`}
console.log(tampilNama("Azmi"))


let mahasiswa = ["azmi", "udin", "asep"]



// let jumlahHuruf = mahasiswa.map(function (nama){
//
//     return nama.length
//
// })
// console.log(jumlahHuruf)

// ini lebih rinkas
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)
//
// ini berbentuk object
// let jumlahHuruf = mahasiswa.map(nama=> ({ nama:nama, jmlhhuruf:nama.length}))
// console.table(jumlahHuruf)

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // [1, 4, 9, 16]


let angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const angkaGanjil = angka.map(function (angka1){
    // if (angka % 2 === 0){
    //     return`${angka} ganjil`
    // }else {
    //     return `${angka} genap`
    // }
    const array = angka;

    return ({
        angka1: angka1,
        type: angka1 % 2 == 0 ? "genap" : "ganjil"

    })

})
console.table(angkaGanjil)




const angkaUrut = angka.sort()
console.log(angkaUrut)



