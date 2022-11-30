
window.onload = function () {


  
  document.getElementById('cargar').addEventListener('click', () => {

    let array_1 = ["2","1706","13"]
    let array_2 = ["656","1","51"]
    let map = {}
    let mapA = {}
    let array_3 = ["41467","5114","43608"]
    let array_4 = ["9253","28977","38524"]

    function peticion_2(arreglo){
      for(x of arreglo){

        let id = x
        
        let url = `https://api.jikan.moe/v4/anime/${id}/full`
    
        fetch(url)
          .then(response => response.json())
          .then(obj => {
    
            // Inicio del procesamiento
            
            let data = obj['data']
            mapA[data.title] = [data.score , data.scored_by ]
    
            
          })
          .catch(error => {
            document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
          })
        }
    }

    function peticion_1(arreglo){

      for(x of arreglo){

        let id = x
        
        let url = `https://api.jikan.moe/v4/manga/${id}/full`
    
        fetch(url)
          .then(response => response.json())
          .then(obj => {
    
            // Inicio del procesamiento
            
            let data = obj['data']
            map[data.title] = [data.score , data.scored_by ]
    
            
          })
          .catch(error => {
            document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
          })
        }

    }


    function chartA(dicc){

      document.getElementById('my-chart').innerHTML = `
      
      <table class = "charts-css bar show-heading show-labels data-spacing-20 show-primary-axis show-data-axes " style = "--label-size: 220px">
      <caption> Anime Comunity Score </caption>

      
      
      <thead>
        <tr>
          <th scope="col"> Anime </th>
          <th scope="col"> Score </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[0]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[0]][0])}/10)"> ${dicc[Object.keys(dicc)[0]][0]} </td>
          
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[1]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[1]][0])}/10)"> ${dicc[Object.keys(dicc)[1]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[2]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[2]][0])}/10)"> ${dicc[Object.keys(dicc)[2]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[3]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[3]][0])}/10)"> ${dicc[Object.keys(dicc)[3]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[4]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[4]][0])}/10)"> ${dicc[Object.keys(dicc)[4]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[5]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[5]][0])}/10)"> ${dicc[Object.keys(dicc)[5]][0]} </td>
        </tr>
      <tbody>
    </table>
    
    
    
    

    
    
    `


    document.getElementById('my-chart').innerHTML += `
      
      <table class = "charts-css bar show-heading show-labels data-spacing-20 show-primary-axis show-data-axes " style = "--label-size: 220px">
      <caption> Anime Comunity Users votes </caption>

      
      
      <thead>
        <tr>
          <th scope="col"> Anime </th>
          <th scope="col"> Score </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[0]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[0]][1])}/300000)"> ${dicc[Object.keys(dicc)[0]][1]} </td>
          
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[1]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[1]][1])}/300000)"> ${dicc[Object.keys(dicc)[1]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[2]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[2]][1])}/300000)"> ${dicc[Object.keys(dicc)[2]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[3]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[3]][1])}/300000)"> ${dicc[Object.keys(dicc)[3]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[4]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[4]][1])}/300000)"> ${dicc[Object.keys(dicc)[4]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[5]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[5]][1])}/300000)"> ${dicc[Object.keys(dicc)[5]][1]} </td>
        </tr>
      <tbody>
    </table>`

    }

    function chart(dicc){
      document.getElementById('my-chart').innerHTML = `
      
      <table class = "charts-css bar show-heading show-labels data-spacing-20 show-primary-axis show-data-axes " style = "--label-size: 220px">
      <caption> Manga Comunity Score </caption>

      
      
      <thead>
        <tr>
          <th scope="col"> Manga </th>
          <th scope="col"> Score </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[0]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[0]][0])}/10)"> ${dicc[Object.keys(dicc)[0]][0]} </td>
          
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[1]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[1]][0])}/10)"> ${dicc[Object.keys(dicc)[1]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[2]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[2]][0])}/10)"> ${dicc[Object.keys(dicc)[2]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[3]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[3]][0])}/10)"> ${dicc[Object.keys(dicc)[3]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[4]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[4]][0])}/10)"> ${dicc[Object.keys(dicc)[4]][0]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[5]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[5]][0])}/10)"> ${dicc[Object.keys(dicc)[5]][0]} </td>
        </tr>
      <tbody>
    </table>
    
    
    
    

    
    
    `


    document.getElementById('my-chart').innerHTML += `
      
      <table class = "charts-css bar show-heading show-labels data-spacing-20 show-primary-axis show-data-axes " style = "--label-size: 220px">
      <caption> Manga Comunity Users votes </caption>

      
      
      <thead>
        <tr>
          <th scope="col"> Manga </th>
          <th scope="col"> Score </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[0]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[0]][1])}/300000)"> ${dicc[Object.keys(dicc)[0]][1]} </td>
          
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[1]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[1]][1])}/300000)"> ${dicc[Object.keys(dicc)[1]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[2]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[2]][1])}/300000)"> ${dicc[Object.keys(dicc)[2]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[3]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[3]][1])}/300000)"> ${dicc[Object.keys(dicc)[3]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[4]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[4]][1])}/300000)"> ${dicc[Object.keys(dicc)[4]][1]} </td>
        </tr>
        <tr>
          <th scope="row"> ${Object.keys(dicc)[5]} </th>
          <td style="--size: calc(${parseFloat(dicc[Object.keys(dicc)[5]][1])}/300000)"> ${dicc[Object.keys(dicc)[5]][1]} </td>
        </tr>
      <tbody>
    </table>
    `
    }




    if(document.getElementById("select").value == "manga"){
      peticion_1(array_2);
      setTimeout(peticion_1, 4000, array_1);
      setTimeout(chart, 10000,map)
      console.log(map);
    }else{
      peticion_2(array_3);
      setTimeout(peticion_2, 4000, array_4);
      setTimeout(chartA, 10000,mapA);
      console.log(mapA)
    }
    
    
    console.log(document.getElementById("select").value)

    
  })

}