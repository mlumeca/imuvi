import { Component, OnInit } from '@angular/core';
import { List, ListsResponse } from '../../models/lists.interfaces';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit{
  constructor(private accountService: AccountService) { }

  lists: List[] = [];
  account_id: string = '';

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.getLists(this.account_id).subscribe(response => {
      this.lists = response.results;
    });
  }



}
