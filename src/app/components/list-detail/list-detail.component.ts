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
  averageRating: number = 0;

  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.listService.getOneList(this.listId!).subscribe(response => {
      this.lists = response;
    })
    this.listId = this.route.snapshot.paramMap.get('id');
    if (this.listId) {
      this.listService.getOneList(this.listId).subscribe((response) => {
        this.lists = response;
        this.item = response.items;
        this.calculateTotalCount();
        this.calculateAverageRating();
      });
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
    const totalRating = this.item.reduce((sum, item) => sum + item.vote_average, 0);
    this.averageRating = this.item.length > 0 ? totalRating / this.item.length : 0;
  }
}


