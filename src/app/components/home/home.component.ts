import { Component } from '@angular/core';
import { ImuviService } from '../../services/imuvi.service';
import { Trending } from '../../models/home.interface';
import { Actor } from '../../models/homeActors.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  trending: Trending[] = [];
  trendingActor: Actor[] = [];

  constructor(private imuviService: ImuviService) {}

  ngOnInit(): void {
    this.imuviService.getTrending().subscribe (response => {
      this.trending = response.results;
    });
    this.imuviService.getTrendingActor().subscribe (response => {
      this.trendingActor = response.results;
    })

  
  }

  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }


}
