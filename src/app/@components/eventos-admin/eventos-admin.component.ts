import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-admin',
  templateUrl: './eventos-admin.component.html',
  styleUrls: ['./eventos-admin.component.css']
})
export class EventosAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Si se hizo el routing");

    //https://io1gnlwg7i.execute-api.us-east-1.amazonaws.com/create/event
  }

  enviarForm(){
    let form = document.getElementById('eventForm');
    let inputs;
    console.log(form);
    if(form!=null){
      inputs = form.getElementsByTagName('input');
      let nombre=  <HTMLInputElement> document.getElementById("nombre");
      let ubicacion=  <HTMLInputElement> document.getElementById("ubicacion");
      let descripcion =  <HTMLInputElement> document.getElementById("descripcion");
      let fecha =  <HTMLInputElement> document.getElementById("fecha");
      let usuarioId = <HTMLInputElement> document.getElementById("usuarioId");
      let categoriaId = document.getElementById("categoriaId");
      let categoria = "";
      if(categoriaId!=null){
        let options = categoriaId.getElementsByTagName("option");
        for(let i= 0; i< options.length; i++){
          if(options[i].selected){
            categoria= options[i].value;
          }
        }
      }
      let body2 = {
        nombre: nombre?.value,
        ubicacion: ubicacion?.value,
        descripcion: descripcion?.value,
        fecha: fecha?.value,
        usuarioId: 1,
        categoriaId: parseInt(categoria)
      }
      //console.log(body);
      fetch("https://io1gnlwg7i.execute-api.us-east-1.amazonaws.com/create/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(body2)
      })
      .then( raw => raw.json())
      .then( data => window.location.href = "http://proyecto-sd-map.s3-website-us-east-1.amazonaws.com")
      .catch(error => console.log(error))
    }
  }

}
