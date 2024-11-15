import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { ActorList } from '../../models/actor-list.interface';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit {

  actorList: ActorList[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {

    this.actorService.getPopular().subscribe((resp) => {
      this.actorList = resp.results;
      console.log(this.actorList)
    })

  }



}
