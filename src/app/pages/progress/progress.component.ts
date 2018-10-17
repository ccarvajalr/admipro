import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1 : number = 10;
  progreso2 : number = 80;

  constructor() { }

  ngOnInit() {
  }
  actualizar(event:number){
    console.log('Evento:', event);
    
  }
}
