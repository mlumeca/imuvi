import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { UserList } from '../../models/user-lists.interface';
import { List } from '../../models/lists.interfaces';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { StatusResponse } from '../../models/status-list.interfaces';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrl: './modal-list.component.css'
})
export class ModalListComponent implements OnInit {
  @Input() listName: string = '';
  @Input() listDesc: string = '';
  @Input() movieId!: string;
  userLists: UserList[] = []; 
  listId: string | null = '';
  lists: List[] = [];
  account_id: string = '';
  sessionId = localStorage.getItem('session_id');
  isCollapsed = true;

  

  constructor(private accountService: AccountService, public activeModal: NgbActiveModal, private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.fillList();

  }


  createList() {
    if (this.listName) {
      this.accountService.createList(this.listName, this.listDesc).subscribe((response) => {
        const newList: UserList = {
          id: response.list_id,
          name: this.listName,
          description: this.listDesc,
          favorite_count: 0,
          item_count: 0,
          iso_639_1: 'en',
          list_type: 'movie',
          poster_path: null
        };

        this.userLists.push(newList);
        this.fillList();
        this.listName = '';
        this.listDesc = '';

      });

      alert(`Lista "${this.listName}" creada.`);

    } else {
      alert(`Inicie sesión`)
    }
    
  }

  addMoviList(): void {
    if (this.listId && this.movieId) {
      this.listService.addMovieToList(this.listId, this.movieId).subscribe((response:
        StatusResponse) => {
        this.activeModal.close();
      })
    }
  }

  fillList() {
    this.listService.getLists(this.account_id).subscribe(response => {
      this.lists = response.results;
    });
  }
}


