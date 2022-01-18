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
  

  fetch(`https://hh8psx4q44.execute-api.us-east-1.amazonaws.com/getEvents`)
  .then(res => res.json())
  .then(res => {
    for (let i = 0; i < res.records.length; i++) {
      console.log("cada record");

      let startIndx = res.records[i][2].stringValue.search("@");
      if(startIndx!=-1){
        let commaIndx = startIndx + res.records[i][2].stringValue.slice(startIndx, -1).search(",", startIndx+1);
        let latlong = res.records[i][2].stringValue.slice(startIndx+1, commaIndx+res.records[i][2].stringValue.slice(commaIndx+2,-1).search(",",commaIndx+2))
        let latlongList = latlong.split(",").map(parseFloat)
        var marker = L.marker(latlongList, {icon: myIcon}).addTo(mymap);
        var cat= "";
        switch(res.records[i][5].longValue) {
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
        // - 5/09/2021          <a href=http://localhost:4200/calendar/${res.records[i][0].longValue} class="btn btn-success"  style="width:100%; color:white;">Agregar a mi calendario</a>
       marker.bindPopup(`
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title"><b>${res.records[i][1].stringValue}</b></h3>
            <h6 class="card-subtitle"><b>${cat}</b> - ${res.records[i][4].stringValue}</h6>
            <p class="card-text">${res.records[i][3].stringValue} </p>
            <a href="http://proyecto-sd-map.s3-website-us-east-1.amazonaws.com/eventos/update/${res.records[i][0].longValue}" class="btn btn-secondary" style="width:100%; color:white;">Editar Evento</a>
          </div>
        </div>
      `).openPopup();
      }
   }
    
  });
  
  }

}

