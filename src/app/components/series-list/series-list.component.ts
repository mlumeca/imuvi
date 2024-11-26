import { Component } from '@angular/core';
import { Serie, SerieGenre} from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {
  serieList: Serie[] = [];
  serieGenre:  SerieGenre[] = [];
  page = 1;
  totalPages = 1;
  listName: string = '';
  listDesc: string = '';
  modalRef: NgbModalRef | undefined;


  constructor(private serieService: SerieService,  private modalService: NgbModal) {}


  ngOnInit(): void {
    this.newPage();
    this.serieService.getSerieGenre().subscribe (response => {
      this.serieGenre = response.genres;
    })
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  newPage(): void {
    this.serieService.getSeriePage(this.page).subscribe(resp => {
      this.serieList = resp.results;
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalListComponent);   
  }



}
