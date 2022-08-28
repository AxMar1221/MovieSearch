import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Component({
  selector: 'app-crads',
  templateUrl: './crads.component.html',
})
export class CradsComponent implements OnInit {
  @Input('movie') movie!: Movies;
  constructor() { }

  ngOnInit(): void {
  }
  getPoster(){
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/400';
    // if(this.movie.Poster === 'N/A'){
    //   return 'https://via.placeholder.com/400';
    // } else {
    //   return this.movie.Poster
    // }
  }

}
