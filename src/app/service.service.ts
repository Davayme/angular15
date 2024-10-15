import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiUrl = 'http://localhost:2500/clients'; // URL del backend genérico

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  getById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }


  update(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
