import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map, Observable, switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from '../interfaces/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  @ViewChild('movieSearchInput', {static: true}) movieSearchInput!: ElementRef;
  movies$!: Observable<Movies[]>
  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
        map((event: Event) => {
          const searchTerm = ( event?.target as HTMLInputElement).value;
          return searchTerm
        }),
        filter((searchTerm: string)=> searchTerm.length > 3),
        debounceTime(500),
        distinct(),
        switchMap((searchTerm: string)=>this.movieService.getMovies(searchTerm))
      )
  }
}
