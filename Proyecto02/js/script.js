
window.onload = function () {


  
    document.getElementById('cargar').addEventListener('click', () => {
  
  
        
        
        
        let id = "116778"//document.getElementById("id_anime").value
        let url = `https://api.jikan.moe/v4/manga/${id}/characters`
  
      fetch(url)
        .then(response => response.json())
        .then(obj => {
  
          // Inicio del procesamiento
          
          
          let data = obj['data']
          //console.log(data[0]['character']['name'])
          let arreglo=[]

          for(x of data){
            console.log(x['character'])

            document.getElementById('respuesta').innerHTML+= `
            
              
            <li>
            <div class="card">
            <img src="${x['character']['images']['jpg']['image_url']}" class="card-img-top" alt="..." width="40%" height="155">
            <div class="card-body">
              <h5 class="card-title">${x['character']['name']}</h5>
            
           </li>
             
           `
          }

          //document.getElementById('respuesta').innerHTML+= `
            
         // ${x['character']['name']} <img src= "${x['character']['images']['jpg']['image_url']}" width="95" height="105">
          //<li>
          //${data[0]['character']['name']}
          
         //</li>
           
         //`

         //document.getElementById('respuesta').innerHTML+= `
            
              
         //<li>
         //${data[2]['character']['name']}
         
        //</li>
          
        //`
          //for(x of data){
            //console.log(x.character)
            //arreglo.push(x.character)
            //console.log(data.character.name)
            //if(arreglo ==)

            //document.getElementById('respuesta').innerHTML= `
            
              
                //<li>
                //${x.character.name}
                
               //  </li>
                 
               
          //  
          // `
         // }
          //for(x of data){
            //console.log(x)
          //}
  
          //document.getElementById('respuesta').innerHTML = `
            
              
           //     <li>
             //   <h5 class="card-title">${data.title}</h5>
               // <p class="card-text">${data.synopsis.slice(0,150)}...</p>
               // </li>
                
              
            
         // `
          // Fin del procesamiento
          
        })
        .catch(error => {
          document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
        })

       
        
    })
  
  }