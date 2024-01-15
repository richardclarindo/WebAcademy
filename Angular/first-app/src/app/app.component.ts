import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tchauMundo = 'Tchau'
  alunos = [
    {
      nome: "Euclides",
      idade: 21,
      trabalha: 'Eldorado',
      salario: '2000'
    },
    {
      nome: "Richard",
      idade: 27,
      trabalha: 'Eldorado',
      salario: '10000'
    },
    {
      nome: "Livia",
      idade: 20,
      trabalha: 'Eldorado',
      salario: '9000'
    }
  ]
}
