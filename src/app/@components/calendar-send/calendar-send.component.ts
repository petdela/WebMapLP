import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-send',
  templateUrl: './calendar-send.component.html',
  styleUrls: ['./calendar-send.component.css']
})
export class CalendarSendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const valores = window.location.pathname;
    console.log(valores)
    const id = valores.split('/')[2];
    console.log(id);
    let idInput = document.getElementById("id");
    idInput?.setAttribute('value', id);
  }

}
