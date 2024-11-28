import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Item, ListDetailResponse } from '../../models/list-detail.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserList } from '../../models/user-lists.interface';
import { StatusResponse } from '../../models/status-list.interfaces';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {
  @Input() listName: string = '';
  @Input() listDesc: string = '';
  @Input() movieId!: string;

  listId: string | null = '';
  lists: ListDetailResponse | undefined;
  item: Item[] = [];
  moviesCount: number = 0;
  seriesCount: number = 0;
  totalCount: number = 0;
  totalItems: number = 0;
  currentPage: number = 1;
  totalPages: number = 0;
  averageRating: number = 0;
  closeResult = '';
  idElemento: number = 0;


  constructor(private listService: ListService, private route: ActivatedRoute, private accountService: AccountService, private modalService: NgbModal) { }


  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.loadItems();
  }

  loadItems(): void {
    this.listService.getOneList(this.listId!, this.currentPage).subscribe(response => {
      this.item = response.items;
      this.totalItems = response.item_count;
      this.totalCount = response.item_count;
      this.totalPages = Math.ceil(this.totalItems / 20);
      this.calculateAverageRating();
    });
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadItems();
    }
  }

  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }
  getRatingPercentaje(number: number) {
    return number * 10;
  }

  calculateTotalCount(): void {
    this.totalCount = this.item.length;
  }

  calculateAverageRating(): void {
    if (!this.item || this.item.length === 0) {
      this.averageRating = 0;
      return;
    }

    let totalRating = this.item.reduce((sum, movie) => sum + movie.vote_average, 0);
    this.averageRating = totalRating / this.item.length;
  }

  deleteList(listId: string) {
    this.accountService.deleteUserList(listId).subscribe(response => {
      alert('Lista eliminada.');
    });
  }

  updateList(listId: string, listName: string, listDesc: string) {
    this.accountService.updateUserList(listId, listName, listDesc).subscribe(response => {
      this.lists!.name = listName;
      this.lists!.description = listDesc;

      alert('Lista actualizada.');
      console.log(response)
    });


  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
    );
  }

  openModal(content: TemplateRef<any>, idMedia: number): void {
    this.idElemento = idMedia;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${reason}`;
      }
    );
  }

  removeItem(movieId: number): void {
    this.listService.removeMovieToList(this.listId!, movieId).subscribe((response: StatusResponse) => {
      this.loadItems();
    });
  }

  ConfirmDelete(): void {
    this.removeItem(this.idElemento);
    this.modalService.dismissAll();
  }

}


