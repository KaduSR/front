import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../models/produtos';
import { API_CONFIG } from '../config/api.config';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {} // Ajuste conforme necessário

  findall(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseURL}/produtos`);
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('${API_CONFIG.baseURL}/produtos');
  }

  addProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${API_CONFIG.baseURL}/api/produtos`,
      produto
    );
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${API_CONFIG.baseURL}/produtos/${id}`);
  }
}
