

// mengunakan ajax
// $.ajax({
//     url : "http://www.omdbapi.com/?i=tt38961=98&apikey=28df2d56&s=avengers",
//     success : movies => console.log(movies),
//     error : e => console.log(e)
// })




// java script murni



// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200){
//         if(xhr.status === 4){
//             console.log(JSON.parse(xhr.response))
//         }else {
//             console.log(xhr.responseText)
//         }
//     }
// }


// xhr.open('get', " http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56")
// xhr.send()


// java script fecth


const movies = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56")
    .then(response => response.json())
    .then(response => console.log(response))



// promise


// object yang merepsentasikan keberhasilan / kegagalan sebuah event yang asynchrounus di masa yan akan datang