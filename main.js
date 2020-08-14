const form = document.getElementById("film-form");
const titleInput = document.getElementById("title");
const directorInput = document.getElementById("director");
const urlInput = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");
//ui objesini başlatma

//event
eventListeners();

function eventListeners(){
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function(){
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  })
  secondCardBody.addEventListener("click", deleteFilm);
  clearButton.addEventListener("click", clearAllFilms)
}


function addFilm(e){
  const title = titleInput.value;
  const director = directorInput.value;
  const url = urlInput.value;
  if(title === "" || director === ""){
    UI.showAlert("Tüm Alanları doldurun","danger");
  }else{
    const newFilm = new Film(title,director,url);
    UI.addFilmToUI(newFilm);
    UI.showAlert("Film başarıyla eklendi", "success")
    
    Storage.addFilmToStorage(newFilm);
    UI.clearInputs(titleInput,directorInput,urlInput)
  }
  
  e.preventDefault();
}


function deleteFilm(e){
  if(e.target.id === "delete-film"){
    UI.deleteFilmFromUI(e.target.parentElement.parentElement);
    
    UI.showAlert("Film başarıyla silindi", "success")
    Storage.deleteFilmFromStorage(e.target.previousElementSibling.previousElementSibling.textContent);
  }
}

function clearAllFilms(){
  if(confirm("Bütün filmleri silmek istediğinize emin misiniz?")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
}




