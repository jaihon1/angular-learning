import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';


//import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebService {

    BASE_URL = '/api';
    constructor(private http: HttpClient){

    }
    getMessages() : Observable<Message[]>{
        return this.http.get<Message[]>(this.BASE_URL + '/messages')
            .pipe(
                catchError(this.handleError<Message[]>('getMessages', []))
            );

    }

    postMessage(message){
        console.log('New message');
        console.log(message);
        return this.http.post(this.BASE_URL + '/messages', message).toPromise() ;
    }



    
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }



}

class Message {
    owner: string;
    message: string;


}