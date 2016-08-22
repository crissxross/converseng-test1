import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScenedataService {

  private scenedataUrl = 'mock-data/simple-dialog.json';

  constructor(private http: Http) { }

  // NOTE: http.get returns an Observable emitting Response objects

  getSceneDialog(): Observable<any> {
    return this.http.get(this.scenedataUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
// NOTE: The result of map is also an Observable that emits a JSON object

// Not sure I like this way of doing it - i.e. extractData
  private extractData(res: Response) {
    let body = res.json();
    return body.dialog || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
