import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/produtos';
import { ProdutoService} from './../../services/services.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  ELEMENT_DATA: Produto[] = [];
  FILTERED_DATA: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'quantidade'];

  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  // Lista de produtos

  constructor(private ProdutoService: ProdutoService) {}

  ngOnInit(): void {
    this.findall();
  }

  findall() {
    this.ProdutoService.findall().subscribe((produto) => {
      this.ELEMENT_DATA = produto;
      this.dataSource = new MatTableDataSource<Produto>(produto);
    });
  }

  orderByStatus(status: any): void {
    let list: Produto[] = [];
    this.ELEMENT_DATA.forEach((element) => {
      if (element.quantidade == status) list.push(element);
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Produto>(list);
  }
}
