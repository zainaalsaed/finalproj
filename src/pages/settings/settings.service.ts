import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class SettingsService {
  constructor(private http: Http) {}
  getLanguages() {
    return this.http.request('assets/i18n/en.json').map(res => res.json())
  }
}