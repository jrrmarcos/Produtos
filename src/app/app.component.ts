import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Lista de Produtos';
  mensagem : string = "Projeto desenvolvido durante as aulas presenciais de TC2 para estudo da tecnologia Angular";
  desenvolvedor : string = "Marcos";
}
