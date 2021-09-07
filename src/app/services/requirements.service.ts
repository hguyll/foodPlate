import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../models/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {
  private requirementsUrl: string = 'assets/assets/server/requirements.json';
  private requirements: Array<Requirement>;

  constructor(private http: HttpClient) { }

  getRequirements() : Observable<Requirement[]> {
    return this.http.get<Requirement[]>(this.requirementsUrl);
  }
}
