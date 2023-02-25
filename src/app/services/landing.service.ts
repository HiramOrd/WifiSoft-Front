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
  
  async getPackages(): Promise<GenericText> {
    //TODO: Asi es como el backend tiene la llamada
    const observable = this.http.get<GenericText>(API.SERVER);
    //TODO: Asi es como deberia quedar
    //const observable = this.http.get<GenericText>(API.SERVER + API.PACKAGES);
    return await firstValueFrom(observable);
  }
  async getAbout(): Promise<GenericText> {
    const observable = this.http.get<GenericText>(API.SERVER + API.ABOUT);
    return await firstValueFrom(observable);
  }
}
