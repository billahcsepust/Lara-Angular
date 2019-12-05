import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasumService {
  private useUrl='http://localhost:8000/api';
  constructor(private http:HttpClient) { }
  signup(data)
  {
    return this.http.post(`${this.useUrl}/signup`,data);
  }
  login(data)
  {
    return this.http.post(`${this.useUrl}/login`,data);
  }
}
