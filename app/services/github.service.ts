import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username = 'johnjamesmartin';
    private client_id = 'df9ddd55462355284a6f';
    private client_secret = '62efba979c8979bc511b619ceb2625e9b4628d6e';

    constructor(private _http:Http) {
        console.log('Github service init...');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }
}
