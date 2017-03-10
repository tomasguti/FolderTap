import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Player } from './app.player'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {
        console.log(http);
        this.http = http;
    }
    // private instance variable to hold base url
    private namesUrl = 'http://172.10.0.85:4201/names';

    public addPoint(name: String): Observable<Player[]> {
        return this.http.get(this.namesUrl+"/"+name)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getAll(): Observable<Player[]> {
        return this.http.get(this.namesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}