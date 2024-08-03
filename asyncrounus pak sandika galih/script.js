// function halo(nama){
//     alert(`halo ${nama}`)
// }


// function tampilkanPesan(callback){
//     const nama = prompt(`masukan nama`)
//     callback(nama)
// }


// // tampilkanPesan(halo)
// tampilkanPesan(nama => {
//     alert(`halo ${nama}`)
// })


// const mhs = [
    
// {

//     nama : "Muhamad Azmi Naziyulloh",
//     romble : "PPLG X-4",
//     jurusan : "Pengambagan Perangkat Lunak dan Gim",
//     idDosen : 2

// },
// {
//     nama : "Asep maulana",
//     romble : "PPLG X-4",
//     jurusan : "Pengambagan Perangkat Lunak dan Gim",
//     idDosen : 1
// }

// ]

// console.log("mulai")

// mhs.forEach(m => {
//     for (let i ; i < 100000000;i++){
//         let date = new Date
//     }

//     console.log(m.nama)
// })


// console.log("selesai")


// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = JSON.parse(result)
//     mhs.forEach(element => {console.log(element.nama)});
// })

// console.log("selesai")


console.log("mulai")

$.ajax({
    url : 'data/mahasiswa.json',
    success : (mhs) => {
        mhs.forEach(element => {
            console.log(element.nama)
        });
    },
    error : (e) => {
        console.log(e.responText)
    }  
})


console.log("selesai")



console.log





