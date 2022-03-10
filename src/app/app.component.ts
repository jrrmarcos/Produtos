import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'projetoNovo';
  mensagem : string = "Seja bem-vindo a disciplina de TC2";
  desenvolvedor : string = "Marcos";
}
