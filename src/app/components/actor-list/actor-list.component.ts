import { Component, Input, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../models/actor-list.interface';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit {

  actorList: Actor[] = [];
  originalActorList: Actor[] = [];
  page = 1;
  totalPages = 1;

  @Input() texto = '';
  constructor(private actorService: ActorService, private translationService: TranslationService) { }

  ngOnInit(): void {
    this.newPage();
    this.translationService.initializeLanguage();
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  newPage(): void {
    this.actorService.getPeoplePage(this.page).subscribe(resp => {
      this.actorList = resp.results;
      this.originalActorList = this.actorList;
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }

  searchingActor(name: string): void {
    if (name.trim() !== '') {
      this.actorService.getActorByName(name).subscribe(resp => {
        this.actorList = resp.results;
      });
    } else {
      this.actorList = [...this.originalActorList];
    }
  }

  getText(key: string): string {
    return this.translationService.translate(key);
  }
}
