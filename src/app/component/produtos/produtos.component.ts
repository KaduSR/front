import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/produtos';
import { ProdutoService } from './../../services/services.service';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Lista de produtos

  constructor(private ProdutoService: ProdutoService) {}

  ngOnInit(): void {
    this.findall();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findall() {
    this.ProdutoService.findall().subscribe((produto) => {
      this.ELEMENT_DATA = produto;
      this.dataSource = new MatTableDataSource<Produto>(produto);
      this.dataSource.paginator = this.paginator;
    });
  }

  orderByStatus(status: any): void {
    let list: Chamado[] = [];
    this.ELEMENT_DATA.forEach((element) => {
      if (element.status == status) list.push(element);
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Produto>(list);
    this.dataSource.paginator = this.paginator;
  }
}
