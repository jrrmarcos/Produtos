import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "produtos", 
    component: ListaProdutosComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
