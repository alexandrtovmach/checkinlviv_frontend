import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IHttpReq } from '../models/http-req';
import { ToasterService } from './toastr.service';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private failMessage = 'Fail';

    constructor(private _http: Http, private toastrService: ToasterService, private _router: Router) { }

    private handleError = (error: any): Promise<any> => {
        let message = error._body || error.statusText;
        this.toastrService.showMessage('error', message, this.failMessage);
        return error;
    }

    public sendRequest(options: IHttpReq): Promise<any> {
        let url: string;
        let promise = null;

        if (!options.url) {
            return Promise.reject('Url required');
        } else {
            url = environment.hosting + options.url;
        }
        const method = options.method || 'GET';
        const body = options.body || {};
        const successMessage: string = options.successMessage || 'Success';
        this.failMessage = options.failMessage || this.failMessage;
        const headers = options.headers || this.headers;

        if (method === 'GET') {
            promise = this._http.get(url)
                .toPromise();
        } else if (method === 'POST') {
                promise =  this._http
                .post(url, body, { headers: headers })
                .toPromise();
        } else if (method === 'PUT') {
            promise =  this._http
                .put(url, body, { headers: headers })
                .toPromise();
        } else if (method === 'DELETE') {
            promise =  this._http.delete(url, { headers: headers })
                .toPromise();
        }

        return new Promise((resolve, reject) => {
            promise
                .then((data) => {
                    const json = data && data._body ? JSON.parse(data._body) : {};
                    resolve(json);
                    if (options.successMessage) {
                        this.toastrService.showMessage('success', null, successMessage);
                    }
                    return null;
                })
                .catch((err) => {
                    reject(err);
                    this.handleError(err);
                });
        });
    }
}
