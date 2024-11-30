import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produtos';
import { ProdutoService } from './../../services/services.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = []; // Lista de produtos

  constructor(private ProdutoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.ProdutoService.getProdutos().subscribe(
      (produtos) => (this.produtos = produtos)
    );
  }
}
