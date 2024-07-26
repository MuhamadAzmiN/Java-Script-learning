// const Mahasiswa = function (){
//      this.nama = "Azmi"
//      this.umur = 16
//      this.sayHello = function () {
//         console.log(`Hai nama saya adalah ${this.nama} saya berumur ${this.umur}`)
//      }
// }
//
//
//
// const azmi = new Mahasiswa()
// console.log(azmi.sayHello())


// const mhs1 = {
//     nama: "azmi",
//     umur : 16,
//     sayhello :  () => {
//         console.log(`Hai nama saya adalah ${this.nama} saya berumur ${this.umur}`)
//     }
// }
//
// console.log(mhs1.sayhello())


// const Mahasiswa = function (){
//     this.nama = "azmi"
//     this.umur = 55
//     this.sayHello = function (){
//         console.log(`Halo nama saya adalah ${this.nama} saya berumur ${this.umur}`)
//     }
//
//
//     setInterval(() => {
//         console.log(this.umur++)
//     },500)
// }
//
// const azmi = new Mahasiswa()


function kerjakanTugas(mataKuliah,selesai){
    console.log(`Mulai mengerjakan tugas ${mataKuliah}`)
    selesai()
}

function selesai(){
    alert("selamat mengerjakan tugas")
}


// function repeatLog(n){
//     for (let i = 0;i<n; i++){
//         console.log(i)
//     }
// }
//
// repeatLog(6)

function repeat(n){
    for (let i = 0;i<n; i++){
        action(i);
    }
}

repeat(6, console.log)

repeat(3, alert)

function hitungAngka(){

}







