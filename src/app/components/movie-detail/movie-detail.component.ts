import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  paused = true;
	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}