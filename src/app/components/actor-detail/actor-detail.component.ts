import { Component, OnInit } from '@angular/core';
import { ActorDetailResponse } from '../../models/actor-detail.interface';
import { ActorService } from '../../services/actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.css'
})
export class ActorDetailComponent implements OnInit {

  actorId: string | null = '';
  actorDetail: ActorDetailResponse | undefined;

  constructor(private actorService: ActorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.actorId = this.route.snapshot.paramMap.get('id');

    this.actorService.getOneActor(this.actorId!).subscribe((response) => {
      this.actorDetail = response;
    })
  }

  getImagen(url: string) {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }

}
