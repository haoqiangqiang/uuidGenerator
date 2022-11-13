import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiService {
    apiUrl = 'http://localhost:3000';
    headers = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(
        private _http: HttpClient
    ) {}

    getCount() {
       return this._http.get(`${this.apiUrl}/count`, {headers: this.headers});
    };

    setCount() {
        return this._http.get(`${this.apiUrl}/visit`, {headers: this.headers});
     }
}