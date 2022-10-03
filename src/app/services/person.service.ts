import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpcclient: HttpClient) { 

  }
  getAll(): Observable<any>{
    return this.httpcclient.get(`${environment.apiUrl}/person`);
  }
  create(person: any): Observable<any>{
    return this.httpcclient.post(`${environment.apiUrl}/person`,person);
  }
  update(person: any): Observable<any>{
    return this.httpcclient.put(`${environment.apiUrl}/person`,person);
  }
  delete(idPerson: any): Observable<any>{
    return this.httpcclient.delete(`${environment.apiUrl}/person/${idPerson}`,);
  }
  getTypeDocument():Observable<any>{
    return this.httpcclient.get(`${environment.apiUrl}/documentType`);
  }
  getByid(idPerson: any): Observable<any>{
    return this.httpcclient.get(`${environment.apiUrl}/person/${idPerson}`,);
  }
}
