import { Component } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { Serie } from '../../models/series-list.interface';
import { FavService } from '../../services/fav.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrl: './fav-list.component.css'
})
export class FavListComponent {

  constructor(private favService: FavService) {}

movieList: Movie [] = [];
serieList: Serie [] = [];
account_id: string = '';

ngOnInit(): void {
  this.account_id = localStorage.getItem('account_id') ?? '';
        
    this.favService.getFavMovies(this.account_id).subscribe(response => {
      this.movieList = response.results;
    });
    
    this.favService.getFavSeries(this.account_id).subscribe(response => {
      this.serieList = response.results;
    });
}

getImage(path: string) {
  const base_url = 'https://image.tmdb.org/t/p/w500';
  return base_url + path;
}

}