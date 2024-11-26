import { Component } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { Serie } from '../../models/series-list.interface';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrl: './fav-list.component.css'
})
export class FavListComponent {

  constructor(private accountService: AccountService) {}

movieList: Movie [] = [];
serieList: Serie [] = [];
account_id: string = '';

ngOnInit(): void {
  this.account_id = localStorage.getItem('account_id') ?? '';
        
    this.accountService.getFavMovies(this.account_id).subscribe(response => {
      this.movieList = response.results;
    });
    
    this.accountService.getFavSeries(this.account_id).subscribe(response => {
      this.serieList = response.results;
    });
}

getImage(path: string) {
  const base_url = 'https://image.tmdb.org/t/p/w500';
  return base_url + path;
}

}