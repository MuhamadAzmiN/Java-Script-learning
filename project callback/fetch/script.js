
// $('.seacrh-button').on('click', function(){
//     $.ajax({
//         url : "http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56&s=" + $('.input-keyword').val(),
//         success : result => {
//             const movies = result.Search;
//             let cards = ''
//             movies.forEach((m, index) => {
//                 cards += showAllMovies(m)
    
    
                
//             });
//             $('.movie-container').html(cards)
    
//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url : "http://www.omdbapi.com/?apikey=28df2d56&i=" + $(this).data('imdbid'),
//                     success : m => {
//                         const movieDetail = showDetailMovies(m)
//                         console.log($(this).data('imdbid'))
//                         $('.modal-body').html(movieDetail)
//                     },
    
//                     error : e => {
//                         console.log(e)
//                     }
//                 })
    
//             })
//         },
//         error : e => {
//             console.log(e.responText)
//         }
//     })

// })
//  $.ajax({
//         url : "http://www.omdbapi.com/?i=tt3896198&apikey=28df2d56&s=" + $('.input-keyword').val(),
//         success : result => {
//             const movies = result.Search;
//             let cards = ''
//             movies.forEach((m, index) => {
//                 cards += showAlMovies(m)
    
    
                
//             });
//             $('.movie-container').html(cards)
    
//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url : "http://www.omdbapi.com/?apikey=28df2d56&i=" + $(this).data('imdbid'),
//                     success : m => {
//                         const movieDetail = showDetailMovies(m)
//                         console.log($(this).data('imdbid'))
//                         $('.modal-body').html(movieDetail)
//                     },
    
//                     error : e => {
//                         console.log(e)
//                     }
//                 })
    
//             })
//         },
//         error : e => {
//             console.log(e.responText)
//         }
//     })

const seacrhButton = document.querySelector('.seacrh-button')
seacrhButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword')
    fetch('http://www.omdbapi.com/?apikey=28df2d56&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search
            let card = ''
           
            movies.forEach(m => card += showAllMovies(m))
            const movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = card

            // ketika tombol detail di klik
            

            const detailButton = document.querySelectorAll('.modal-detail-button')
            console.log(detailButton)
            detailButton.forEach(btn => {
                btn.addEventListener('click', function(){
                    const imdbid = this.dataset.imdbid;
                    fetch("http://www.omdbapi.com/?apikey=28df2d56&i=" + imdbid)
                    .then(response => response.json())
                    .then(m => {
                        const movieDetail = showDetailMovies(m)
                        console.log(movieDetail)
                        const modalBody = document.querySelector('.modal-body')
                        modalBody.innerHTML = movieDetail

                    })
                })
            });



        })
        
})

function showDetailMovies(m){
    return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="">
                </div>
                <div class="col-md">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director </strong>${m.Director}</li>
                    <li class="list-group-item"><strong> Actors :</strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Plot:</strong>${m.Plot}</li>
                </div>
                </div>
            </div>`
}


function showAllMovies(m){
    return `<div class="col-md-4 my-5">
                    <div class="card" >
                    <img src="${m.Poster}" class="card-img-top" alt="${m.Poster}">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <p class="card-text">${m.Type}</p>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show detail</a>
                    </div>
                </div> 
            </div>`
}