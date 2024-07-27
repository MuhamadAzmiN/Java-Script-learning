// membuat objet

function Angkot(sopir,trayek,penumpang,kas){
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas
 


    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert("angkot masi kosong")
        }

        for(var i = 0; i < this.penumpang.length;i++){
            if(this.penumpang[i] == namaPenumpang){
                if(bayar < 10){
                    console.log("anda tidak cukup bayar")
                }else {
                    this.penumpang[i] = undefined
                    this.kas += bayar
                    console.log("anda berhasil bayar ")
                }
                return this.penumpang
            }
        }
    }


    this.jumlahPenumpang = function() {
        for(var i = 0;i < this.penumpang.length;i++){
            return this.penumpang.length 
        }
    }


    this.jumlahSopir = function() {
        for(var i = 0;i < this.penumpang.length;i++){
            return this.penumpangNaik.length
        }
    }

    
}


let angkot1 = new Angkot('Udin', ['Ciawi', 'Cicurug'], [], 0)

let angkot2 = new Angkot('Tom', ['Ciawi', 'Cisarua'], [], 0)
