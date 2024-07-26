//
// function  init(){
//
//      function tampilNama(nama)
//      {
//           console.log(nama)
//
//      }
//      return tampilNama
// }
//
// let panggilNama = init()
// panggilNama("Sandika galih")


function ucakapSalam(waktu){
     return function (nama){
          console.log(`Halo ${nama} Selamat ${waktu} Semoga Hari mu menyenangkan!`)
     }
}

let selamatPagi = ucakapSalam("pagi")
let selamatSiang = ucakapSalam("siang")
let selamatMalam = ucakapSalam("malam")

selamatPagi("azmi")
selamatMalam("galih")

console.dir(selamatMalam("asep"))

let add = (function (){
     let counter = 0
     return function (){
          return ++counter
     };
})()

console.log(add())
console.log(add())
