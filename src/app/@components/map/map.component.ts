import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myIcon = L.icon({
      iconUrl: 'http://pngimg.com/uploads/gps/gps_PNG8.png',
      shadowUrl: 'http://pngimg.com/uploads/gps/gps_PNG8.png',

      iconSize:     [50, 64], // size of the icon
      shadowSize:   [0, 0], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [0, 0],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });


    let mymap = L.map('mapid').setView([-2.203816, -79.897453], 10);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9kZW1vcmUiLCJhIjoiY2t0MHYzYjlhMDkwdDJvbm1kMWR3ZWVzMiJ9.STQ27_RMlKmIRMmGFrP-GA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);    
  

  fetch(`http://localhost/back/getSebas.php`)
  .then(res => res.json())
  .then(res => {
    for (let i = 0; i < res.length; i++) {
      console.log(res);
      let startIndx = res[i].ubicacion.search("@");
      let commaIndx = startIndx + res[i].ubicacion.slice(startIndx, -1).search(",", startIndx+1);
      let latlong = res[i].ubicacion.slice(startIndx+1, commaIndx+res[i].ubicacion.slice(commaIndx+2,-1).search(",",commaIndx+2))
      let latlongList = latlong.split(",").map(parseFloat)
      var marker = L.marker(latlongList, {icon: myIcon}).addTo(mymap);
      var cat= "";
      switch(res[i].categoriaId) {
        case "1":
          cat="Entretenimiento";
          break;
        case "2":
          cat="Arte";
          break;
        case "3":
          cat="Musica";
            break;
        case "4":
          cat="Tecnologia";
          break;
      } 
      //res[i].categoriaId
      // - 5/09/2021
     marker.bindPopup(`
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title"><b>${res[i].nombre}</b></h3>
          <h6 class="card-subtitle"><b>${cat}</b> - ${res[i].fecha}</h6>
          <p class="card-text">${res[i].descripcion} </p>
          <a href=http://localhost:4200/calendar/${res[i].id} class="btn btn-success"  style="width:100%; color:white;">Agregar a mi calendario</a>
          <a href="http://localhost:4200/eventos/update/${res[i].id}" class="btn btn-secondary" style="width:100%; color:white;">Editar Evento</a>
        </div>
      </div>
    `).openPopup();
   }
    
  });
  
  }

}

