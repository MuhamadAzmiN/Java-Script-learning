const seacrhButton = document.querySelector('.seacrh-button')       

seacrhButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword')
    // const text = document.querySelector('#text')
    // console.log(text)
    try {
        const movies = await getMovies(inputKeyword.value)
        updateUI(movies)
    } catch (error) {
        console.log(error)
      const moviesDefault = await defultMovies();
        console.log(moviesDefault);
        text.innerHTML = error;
        updateUI(moviesDefault);

        
    }


    const nama = "muhamad azmi "
})



function defultMovies(){
    return fetch('http://www.omdbapi.com/?apikey=28df2d56&s=avengers')
            .then(response => response.json())
            .then(response => response.Search)
            .catch(error => {
                console.error("Pengambilan data tidak berhasil:", error);
                return [];
            });
        }




function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=28df2d56&s=' + keyword)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }else {
                return response.json()
            }
        })
        .then(response => {
            if (response.Response === "False"){
                throw new Error(response.Error)
            }

            return response.Search
        })
        
}

function updateUI(movies){
    let card = '';
    movies.forEach(m => card += showAllMovies(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = card;
}


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

s

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