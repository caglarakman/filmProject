class UI{
  static addFilmToUI = function (newFilm) {

    const filmList = document.getElementById("film-cards")
    
    filmList.innerHTML += `
    <div class="card" >
      <img src="${newFilm.url}" class="card-img-top" alt="${newFilm.title}">
      <div class="card-body">
        <h5 class="card-title">${newFilm.title}</h5>
        <h6 class="card-title">Yönetmen: ${newFilm.director}</h6>
        <a href="#" id="delete-film" class="btn btn-danger btn-block">Filmi Sil</a>
      </div>
    </div>
    `

    // filmList.innerHTML += `
    //   <tr>
    //     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    //       <td>${newFilm.title}</td>
    //       <td>${newFilm.director}</td>
    //       <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    //   </tr>
    // `
  }
  static clearInputs = function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
  
  }
  static showAlert(message,type){
    const firstCardBody = document.querySelectorAll(".card-body")[0];
  //   <div class="alert alert-primary" role="alert">
  //   A simple primary alert—check it out!
  // </div>
    const div = document.createElement("div");
    div.className= `alert alert-${type}`;
    div.textContent=message;
    div.style.marginBottom=0;
    if(firstCardBody.childElementCount===2){
      firstCardBody.appendChild(div);
    }
    setTimeout(function(){
      div.remove();
    },1000)
  }
  
  static loadAllFilms(films){
    const filmList = document.getElementById("film-cards");
    films.forEach(function(film){
      filmList.innerHTML += `
      <div class="card" >
        <img src="${film.url}" class="card-img-top" alt="${film.title}">
        <div class="card-body">
          <h5 class="card-title">${film.title}</h5>
          <h6 class="card-title">Yönetmen: ${film.director}</h6>
          <a href="#" id="delete-film" class="btn btn-danger btn-block">Filmi Sil</a>
        </div>
      </div>
      `
    }
    );
  }
  static deleteFilmFromUI(element){
    element.remove();
  }
  static clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("film-cards");
    while(filmList.firstElementChild !== null){
      filmList.firstElementChild.remove();
    }
  }
}

