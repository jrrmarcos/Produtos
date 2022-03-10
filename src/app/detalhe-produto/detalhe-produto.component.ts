import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  item : Produto = {
    name: "Cerveja Tiger 473ml",
    price: 3.25,
    qtde: 1000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
