// https://stackblitz.com/edit/angular-1oaqdl?file=app/app.component.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ItemsResponse } from './data.interface';
import 'rxjs/add/operator/map';

interface PostResponse {
    name: string;
    job: string;
}
@Injectable()

export class RepositoryService {
    readonly ROOT_URL = 'https://reqres.in/api';
    constructor (private http: HttpClient) {
        const { selectAll: selectAllTodos } = {selectAll : 2};
        console.log('idea repository service instance', selectAllTodos);
    }
    getAllData(): Observable<ItemsResponse> {
         const params = new HttpParams().set('delay', '2').set('page', '4');
         return this.http.get<ItemsResponse>(`${this.ROOT_URL}/users`, { params });
    }
    postData(): Observable<PostResponse> {
        const data = [{
            name: 'Morpheus',
            job: 'Developer'
        }];
        return this.http.post<PostResponse>(`${this.ROOT_URL}/users`, data).map(res => <PostResponse>res[0].name);
    }
}
