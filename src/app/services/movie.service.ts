import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../components/interfaces/apiResponse';
import { Movies } from '../components/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // apiKey 83dd8263
  private API_URL: string = 'http://www.omdbapi.com/?apikey=83dd8263'
  constructor( private http: HttpClient) {}
    getMovies(searchTerm:String):Observable<Movies[]>{
      return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
        map(response => {
          return response.Search;
        })
      )
    }
}
