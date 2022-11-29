
window.onload = function () {


  
  document.getElementById('cargar').addEventListener('click', () => {

    let array = ["116778","90125","70345"]
    for(x of array){

    let id = x
    //let url = `https://api.jikan.moe/v4/anime/${id}/full`
    let url = `https://api.jikan.moe/v4/manga/${id}/full`

    fetch(url)
      .then(response => response.json())
      .then(obj => {

        // Inicio del procesamiento
        
        let data = obj['data']

        document.getElementById('respuesta').innerHTML += `
          <div class="card">
            
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p>${data.score}</p>
              
            </div>
          </div>
        `
        // Fin del procesamiento
        
      })
      .catch(error => {
        document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
      })
    }
  })

}