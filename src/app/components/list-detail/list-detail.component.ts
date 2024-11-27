import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Item, ListDetailResponse } from '../../models/list-detail.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {
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

  constructor(private listService: ListService, private route: ActivatedRoute) { }


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
}


