
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { Drawing } from './drawing';
import { catchError, map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DailyDrawingService {

  constructor(private http:HttpClient) { }

  searchImages(artistName : string) : Observable<any> {
    return this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${artistName}`)
  }

  getImage(objectID : number) : Observable<any> {
    return this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
