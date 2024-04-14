import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class HhServiceService {

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`/api/companies`)
  }

  getVacancies(id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`/api/companies/${id}/vacancies`)
  }

}
