import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class HttpService {

  private api_url: string;

  constructor(private http: Http,
    private authService: AuthenticationService) {
    this.api_url = environment.api_url;
  }

  get(url: string) {
    const headers = new Headers();
    const options = new RequestOptions({ headers: this.appendToken(headers) });
    return this.http.get(this.api_url + url, options)
      .map((response: Response) => response.json());
  }

  afterError(error: any) {
    if (error.status === 401) {
      // this.alertService.unauthorized();
    } else if (error.status === 404) {
      // this.alertService.notFound();
    } else {
      // this.alertService.genericError();
    }

  }

  private appendToken(headers: Headers): Headers {
    const token = this.authService.getToken();
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

}
