// function pertambahan(a, b){
//     return [a + b , a - b ]
// }


// const [tambah,kurang] = pertambahan(3,2)
// console.log(tambah)



// object



// function perkalian(a,b){
//     return {
//         bagi: a / b,
//         kali : a * b
//     }
// }


// const {bagi,kali} = perkalian(2,3)


// console.log(kali)



// study kasus 

 const mahasiswa = {
    nama : "Muhamad Azmi Naziyulloh",
    umur : 16,
    email : "azmi89017@gmail",
    nilai : {
        tugas : {
            produktif : 100,
            olahraga : 10,
            kimia : 80
        },
        uts : function(jamUlangan) {   
            return `jam ulangan anda adalah ${jamUlangan}`
        }
    }
 }


 console.log(mahasiswa.nilai.uts(20))

function cetakMahasiswa({nama, umur , nilai : {tugas : {produktif,olahraga,kimia},uts}} ){
    return `Hai nama anda adalah ${nama} dan anda berumur ${umur}  nilai tugas anda adalah ${kimia}`
}




const nama = cetakMahasiswa(mahasiswa)
console.log(nama)