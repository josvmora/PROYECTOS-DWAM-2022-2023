
window.onload = function () {


  
  document.getElementById('cargar').addEventListener('click', () => {

    let array_1 = ["116778","90125","70345"]
    let array_2 = ["1224","37707","1706"]

    function peticion_1(arreglo){

      for(x of arreglo){

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
                  <p>${data.scored_by}</p>
                  
                </div>
              </div>
            `
            // Fin del procesamiento
            
          })
          .catch(error => {
            document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
          })
        }

    }

    peticion_1(array_2);
    setTimeout(peticion_1, 3000, array_1);


    /*for(x of array){

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
    */
  })

}