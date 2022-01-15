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
    fetch('http://localhost/back/getSebas.php')
    .then((response) => {
      return response.json();
    })
    .then((eventos) => {
      let chosen;
      for(let evento of eventos){
        if(evento.id == id){
          chosen = evento;
          break;
        }
      }
      console.log(chosen);
      let idInput = document.getElementById('id');
      idInput?.setAttribute("value", chosen.id);
      let nombre = document.getElementById('nombre');
      nombre?.setAttribute('value', chosen.nombre);
      let ubicacion = document.getElementById('ubicacion');
      ubicacion?.setAttribute('value', chosen.ubicacion);
      let descripcion = document.getElementById('descripcion');
      descripcion?.setAttribute('value', chosen.descripcion);
      let fecha = document.getElementById('fecha');
      fecha?.setAttribute('value', chosen.fecha);
      let categoria = document.getElementById(chosen.categoriaId);
      categoria?.setAttribute('selected',"True");
    })
  }

}
