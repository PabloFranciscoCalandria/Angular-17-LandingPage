import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient); // Para usar HttpClient necesitamos del provider provideHttpClient en app.config.ts
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProduct[]>{ // Aca IProduct va a ser un array
    return this._http.get<IProduct[]>(this.urlBase)
  }

  getProduct(id: number): Observable<IProduct>{// Aca IProduct va a ser un solo valor
    return this._http.get<IProduct>(`${this.urlBase}/${id}`)
  }
}
