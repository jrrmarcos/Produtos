import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtoSelecionado!: number;

  lista! : Produto[];

  constructor(private data : DatabaseService) { }

  ngOnInit(): void {
    this.lista = this.data.getProdutos();
    this.produtoSelecionado = -1;
  }

  atualizarProdutos() {
    this.lista = this.data.getProdutos();
  }

  selecionar(indice: number) : void { 
    this.produtoSelecionado = indice; 
  }

  executarFechamento(info: String) {
    console.log(info)
    this.produtoSelecionado = -1
  }
}
