
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
seacrhButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword')
    try {
        const movies = await getMovies(inputKeyword.value)
        updateUI(movies)
    } catch (error) {
        console.error("error")
    }
})


document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        try {
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        } catch (error) {
            console.error("Error fetching movie detail:", error);
        }
    }
});


function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=28df2d56&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search)
        .catch(error => {
            console.error("Error in getMovies:", error);
        });
}

function updateUI(movies){
    let card = '';
    movies.forEach(m => card += showAllMovies(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = card;
}

function updateUIDetail(m){
    const movieDetail = showDetailMovies(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function getMovieDetail(imdbid){
    return fetch("http://www.omdbapi.com/?apikey=28df2d56&i=" + imdbid)
        .then(response => response.json())
        .catch(error => {
            console.error("Error in getMovieDetail:", error);
        });
}




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