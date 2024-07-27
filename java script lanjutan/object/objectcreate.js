















function Mahasiswa(nama, energi){
    this.nama = nama
    this.energi = energi

}
Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi
    return `Hai ${this.nama} Selamat makan`
}
Mahasiswa.prototype.main = function(jam){
    this.energi += jam
    return `Hai ${this.nama} Selamat bermain`
}
let azmi = new Mahasiswa("azmi", 10)


