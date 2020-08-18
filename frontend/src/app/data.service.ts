import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class DataService {
  baseUrl: string = 'http://localhost:63145/api/messages';

  constructor(private httpClient: HttpClient ) {

  }

  get_jobs() {
    return this.httpClient.get(this.baseUrl);
  }

  get_messages() {
    return this.httpClient.get(this.baseUrl);
  }
}





