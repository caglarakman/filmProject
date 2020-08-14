class Storage{

  static addFilmToStorage(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("Films", JSON.stringify(films));
  
  }
  static getFilmsFromStorage(){
    let films;
    if(localStorage.getItem("Films")===null){
      films=[]
    }else{
      films=JSON.parse(localStorage.getItem("Films"))
    }
    return films;
  }
  static deleteFilmFromStorage(title){
    let films = this.getFilmsFromStorage();
    for(let i=0 ; i<films.length ;i++){
      if(films[i].title === title){
        films.splice(i,1);
      }
    }
    localStorage.setItem("Films", JSON.stringify(films))
  }
  static clearAllFilmsFromStorage(){
    localStorage.removeItem("Films");
    
  }
  
}
