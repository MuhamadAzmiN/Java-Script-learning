

// mengunakan ajax
// $.ajax({
//     url : "http://www.omdbapi.com/?i=tt38961=98&apikey=28df2d56&s=avengers",
//     success : movies => console.log(movies),
//     error : e => console.log(e)
// })




// java script murni





// java script fecth






// promise


// object yang merepsentasikan keberhasilan / kegagalan sebuah event yang asynchrounus di masa yan akan datang


// contoh 1

// let ditepati = true;
// const janji1 = new Promise((resolve,reject) => {
//     if(ditepati){
//         resolve('janji telah di tepatio')
//     }else {
//         reject('ingkar janji')
//     }
// })

// janji1
//     .then(response => console.log(`OK BERHASIL ${response}` ))
//     .catch(response => console.log(`GAGAL ${response}`))


// contoh 2
// let ditepati = true

// const janji2 = new Promise((resolve, reject) => {

//     if(ditepati){
    
//         setTimeout(() => {
//            resolve(`di tepati setelah beberapa waktu`) 
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             reject(`tidak di tepati setelah beberapa waktu`)
//         }, 2000);
//     }

    
// })



// console.log("mulai")
// janji2
// .finally(() => console.log(`selesai menunggu`))
// .then(response => console.log(`OK BERHASIL ${response}`))
// .catch(response => console.log(`GAGAL ${response}`))
// // console.log(janji2.then(response => console.log(`Janji ${response}`)))
// console.log("selesai")


// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul : "avengers",
//             sutradara : "Muhamad Azmi Naziyulloh",
//             pameran : "doddy, erik"
//         }])
//     }, 1000);
// })


// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//        resolve([{
//         kota : "Bandung",
//         cuaca : "Cerah Berawan", 
        
//        }]) 
//     }, 500);
// })


// film 
//     .then(response => console.log(response))
// cuaca 
//     .then(response => console.log(response))





// Promise.all([film, cuaca])
//     // .then(response => console.log(response))


//     .then(response => {
//         const [film, cuaca] = response
//         console.log(film)
//         console.log(cuaca)
//     })



// const movies = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56")
//     .then(response => response.json())
//     .then(response => console.log(response))
// $.ajax({
//     url : "http://www.omdbapi.com/?i=tt38961=98&apikey=28df2d56&s=avengers",
//     success : movies => console.log(movies),
//     error : e => console.log(e)
// })
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200 && xhr.readyState === 4){
//         try {
//             const data = JSON.parse(xhr.responseText)
//             const text = document.getElementById('text')
    

//             // Tampilkan data di elemen HTML
//             text.innerHTML = `
//                 <h1>${data.Title}</h1>
//                 <p><strong>Year:</strong> ${data.Year}</p>
//                 <p><strong>Director:</strong> ${data.Director}</p>
//                 <p><strong>Plot:</strong> ${data.Plot}</p>
//                 <img src="${data.Poster}" alt="${data.Title}" style="max-width: 300px;">
//             `;
//         }catch(e) {
//             console.error(`Error Json Parsing`)
//         }
//     }
// }


// xhr.open('get', " http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56")
// xhr.send()






$.ajax({
    url : "http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56",
    success : movies => console.log("BERHASIL"),
    error : e => console.log(e)

})


console.log
