import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  horasAtuais: number = 0;
  

  constructor() { }

  ngOnInit(): void {
    this.montaHorarioAtual();
    setInterval(() => { this.montaHorarioAtual() }, 3600000);
   }

  montaHorarioAtual() {
    let horario = new Date();
    let atualizacaohorario = horario.getHours();
    this.horasAtuais = atualizacaohorario;
   }

}
