// for of 


// const mhs = ['azmi', 'asep', 'erik']


// for(let i = 0;i < mhs.length;i++){
//     console.log(mhs[i])
// }



// foreach
// mhs.forEach((m ) => {
//     console.log(m)
// });



// for(const m of mhs){
//     console.log(m)
// }


// string
// const nama = 'azmi'
// for (const n of nama){
//     console.log(n)
// }



const mhs = ['azmi', 'asep', 'erik']


// mhs.forEach((m , i) => {
//     console.log(`${m} adalah mahasiswa ${i}`)
// });


// Node list 


// const linama = document.querySelectorAll('.nama')
// // linama.forEach((l) => {
// //     console.log(l.innerHTML)
// // });\


// for(const n of linama){
//     console.log(n.innerHTML)
// }





// arguments


// function jumlahkanAngka(){

//     // return [1,2,3,4,5].reduce((a,i) => a + i)


//     let jumlah = 0;


//     // [1, 2, 3].forEach(element => {
//     //     jumlah += element;
//     // });
//     for(a of arguments){
//         jumlah += a
//     }
        

//     return jumlah;

    
// }


// console.log(jumlahkanAngka(1,2,3,4,5))



// for in


const mahasiswa = {
    nama : "muhamad azmi naziyullog",
    umur : 16,
    email : "azmi89017@gmail.com"
}


// for(m in mahasiswa) {
//     console.log(m)
// }




// const mahasiswaWikrama = ["azmi", "erik"]

// mahasiswaWikrama.forEach(a => {
//     console.log(a)
// });


// for(const a of mahasiswaWikrama){
//     console.log(a)
// }

const namaWikrama = document.querySelectorAll('.namaMahasiswa')
namaWikrama.forEach(element => {
    console.log(element.innerHTML)
});

for(let i = 1;i <= namaWikrama.length; i++){
    console.log(i)
}

