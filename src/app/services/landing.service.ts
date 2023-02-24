import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../environment/api';
import { GenericText } from '../models/generic';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  constructor(private http: HttpClient) {}

  async getHeader(): Promise<GenericText> {
    const observable = this.http.get<GenericText>(API.SERVER + API.HEADER);
    return await firstValueFrom(observable);
  }
}
