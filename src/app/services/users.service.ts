import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/users.model'
@Injectable({
    providedIn: 'root',
})
export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http: HttpClient) { }

    getUsers(){
        return this.http.get(this.url).subscribe(data => {
            console.log(data);
          });;

    }
}