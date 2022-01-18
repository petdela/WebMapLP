import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-update',
  templateUrl: './eventos-update.component.html',
  styleUrls: ['./eventos-update.component.css']
})
export class EventosUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const valores = window.location.pathname;
    console.log(valores)
    const id = valores.split('/')[3];
    console.log(id);
    fetch('https://hh8psx4q44.execute-api.us-east-1.amazonaws.com/getEvents' + "?id="+ id)
    .then(res => res.json())
    .then(res => {
      console.log(res.records[0][0]);
      let idInput = document.getElementById('id');
      idInput?.setAttribute("value", res.records[0][0].longValue);
      let nombre = document.getElementById('nombre');
      nombre?.setAttribute('value', res.records[0][1].stringValue);
      let ubicacion = document.getElementById('ubicacion');
      ubicacion?.setAttribute('value',res.records[0][2].stringValue);
      let descripcion = document.getElementById('descripcion');
      descripcion?.setAttribute('value', res.records[0][3].stringValue);
      let fecha = document.getElementById('fecha');
      fecha?.setAttribute('value', res.records[0][4].stringValue);
      let categoria = document.getElementById(res.records[0][5].longValue);
      categoria?.setAttribute('selected',"True");
    })
  }


  actualizar(){
    let form = document.getElementById('updateForm');
    let inputs;
    console.log(form);
    if(form!=null){
      inputs = form.getElementsByTagName('input');
      let id = <HTMLInputElement> document.getElementById("id");
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
        id: parseInt(id.value),
        nombre: nombre?.value,
        ubicacion: ubicacion?.value,
        descripcion: descripcion?.value,
        fecha: fecha?.value,
        categoriaId: parseInt(categoria)
      }
      //console.log(body);
      fetch("https://kut6g8x7qc.execute-api.us-east-1.amazonaws.com/update/event", {
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
