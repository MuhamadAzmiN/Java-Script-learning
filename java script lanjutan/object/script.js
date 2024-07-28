let mahasiswa = {
    nama : "azmi",
    energi : 10,
    makan: function(porsi, makanan){
        this.energi = this.energi + porsi
        console.log(`Halo ${this.nama} selamat makan ${makanan}`)

    }
}
function Mahasiswa(nama , umur){
    this.nama = nama
    this.umur = umur

}

// declaration
// let murid = new Mahasiswa("azmi", 13)


// function Murid(nama, energi){
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
    

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi
//         console.log(`Halo ${this.nama} selamat makan`)
//     }

//     mahasiswa.main = function(jam){
//         if(jam > 10){
//             console.log(`anda terlalu lama bermain maksimal 10`)
    
//         }else {
//             this.energi -= jam
//             console.log(`Halo ${this.nama} Selamat Bermain`)
//         }

//     }
    


    

//     return mahasiswa

// }

// constructor
function Murid(nama, energi){
    this.nama = nama
    this.energi = energi
    

    this.makan = function(porsi){
        this.energi += porsi
        console.log(`Halo ${this.nama} selamat makan`)
    }

    this.main = function(jam){
        if(jam > 10){
            console.log(`anda terlalu lama bermain maksimal 10`)
    
        }else {
            this.energi -= jam
            console.log(`Halo ${this.nama} Selamat Bermain`)
        }

    }
    

} 





function main(nama){
    this.nama = nama 
    
}


const nama = new main("azmi")
console.log(nama)



let azmi = new Murid("azmi", 10)
let doddy =  new Murid("dody", 10)


const namaGuru = "asep"
console.log(namaGuru)



// object create