import { Component } from '@angular/core';
import { ImuviService } from '../../services/imuvi.service';
import { MovieVideo, Trending, UpcomingMovies } from '../../models/home.interface';
import { Actor } from '../../models/homeActors.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trending: Trending[] = [];
  upcomingMovies: UpcomingMovies[] = [];
  trendingActor: Actor[] = [];
  movieVideos: MovieVideo[] = [];
  listName: string = '';
  listDesc: string = '';
  modalRef: NgbModalRef | undefined;


  constructor(private imuviService: ImuviService, private sanitizer: DomSanitizer, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.imuviService.getTrending().subscribe (response => {
      this.trending = response.results;
    });

    this.imuviService.getTrendingActor().subscribe (response => {
      this.trendingActor = response.results;
    })

    this.imuviService.getUpcomingMovies().subscribe(response => {
      this.upcomingMovies = response.results.slice(0, 10); 

      this.upcomingMovies.forEach(movie => {
        this.loadMovieVideos(movie.id); 
      });
    });

  }

  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }

  getURLVideo(video: MovieVideo) {
    if (video.site == 'YouTube') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.key}`);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${video.key}`);
    }
  }

  loadMovieVideos(movieId: number): void {
    this.imuviService.getMovieVideoById(movieId).subscribe(response => {
        this.movieVideos.push(response.results[0]);  
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalListComponent);   
  }


}
