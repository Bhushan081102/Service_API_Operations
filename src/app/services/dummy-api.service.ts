import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http:HttpClient) { }

  getQuote(): Observable<any>  {
    // alert("hii I am in service");
   return this.http.get('https://dummyjson.com/quotes/1');
  }

  getAllQuote(): Observable <any>{
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getAllData(): Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
