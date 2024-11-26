import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Movie } from '../../models/movie-list.interface';
import { Serie } from '../../models/series-list.interface';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.css',
})
export class RatingListComponent implements OnInit {

  constructor(private accountService: AccountService) {}

  movieList: Movie [] = [];
  serieList: Serie [] = [];
  account_id: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;


  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
          
      this.accountService.getRatedMovies(this.account_id).subscribe(response => {
        this.movieList = response.results;
      });
      
      this.accountService.getRatedSeries(this.account_id).subscribe(response => {
        this.serieList = response.results;
      });
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }
  



}
