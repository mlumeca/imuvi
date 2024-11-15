import { Component, OnInit } from '@angular/core';
import { ActorDetailResponse } from '../../models/actor-detail.interface';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.css'
})
export class ActorDetailComponent implements OnInit{

  actorId: number | undefined;
  actorDetail: ActorDetailResponse | undefined;

  constructor( private actorService : ActorService){}
  
  ngOnInit(): void {
    this.actorService.getOneActor(this.actorId!).subscribe((response) => {
      this.actorDetail = response;
    })
  }

}
