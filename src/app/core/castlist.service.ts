import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { Store } from '@ngrx/store';
import { ADD_MAIN_ACTORS, ADD_PLAYER_CHARACTERS, ADD_NPCS } from './cast.reducer';

@Injectable()
export class CastlistService {

  private charactersUrl = 'assets/mock-data/characters.json';

  constructor(private http: Http, private store: Store<string[]>) { }

  getMainActors() {
    return this.http.get(this.charactersUrl)
      .map(this.extractData)
      .map(data => data.mainActors)
      .map(payload => ({ type: ADD_MAIN_ACTORS, payload: payload }))
      .subscribe(action => this.store.dispatch(action));
      // .map(action => this.store.dispatch(action))
      // .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('extractData (body): ', body);
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
