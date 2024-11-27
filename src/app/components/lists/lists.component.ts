import { Component, OnInit } from '@angular/core';
import { List, ListsResponse } from '../../models/lists.interfaces';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  constructor(private listService: ListService) { }

  lists: List[] = [];
  account_id: string = '';

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.listService.getLists(this.account_id).subscribe(response => {
      this.lists = response.results;
    });
  }



}
