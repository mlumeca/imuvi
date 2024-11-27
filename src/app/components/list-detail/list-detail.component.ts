import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Item, ListDetailResponse } from '../../models/list-detail.interfaces';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private accountService: AccountService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.accountService.getOneList(this.listId!).subscribe(response => {
      this.lists = response;
    })
    this.accountService.getOneList(this.listId!).subscribe(response => {
      this.item = response.items;
    })
  }

  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }
  getRatingPercentaje(number: number) {
    return number * 10;
  }

  calculateTotalCount(): void {
      this.accountService.getLists(this.listId!).subscribe((response) => {
        this.totalCount = response.results.length;
      });
  }

  calculateAverageRating(): void {
    let totalRating = 0;
    let totalItems = 0;
      this.accountService.getOneList(this.listId!).subscribe((response) => {
        response.items.forEach((movie) => {
          totalRating += movie.vote_average;
        });
        totalItems += response.items.length;

        this.averageRating = totalItems > 0 ? totalRating / totalItems : 0;
      });
  };
}


