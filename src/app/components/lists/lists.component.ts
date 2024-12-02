import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { List, ListsResponse } from '../../models/lists.interfaces';
import { AccountService } from '../../services/account.service';
import { ListService } from '../../services/list.service';
import { UserList } from '../../models/user-lists.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  @Input() listName: string = '';
  @Input() listDesc: string = '';
  lists: List[] = [];
  account_id: string = '';
  userId: number = 0;
  closeResult: string | undefined;
  userLists: UserList[] = [];
  listId: string | null = '';
  sessionId = localStorage.getItem('session_id');
  alertMessage: string | null = null;
  alertType: string = '';
  constructor(private listService: ListService, private accountService: AccountService, private modalService: NgbModal, private translationService: TranslationService) { }


  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.listService.getLists(this.account_id).subscribe(response => {
      this.lists = response.results;
    });

    this.accountService.getAccountDetails().subscribe(response => {
      this.userId = response.id;

    })

    this.accountService.getUserLists(this.userId).subscribe(response => {
      this.lists = response.results;
    })
    this.fillList();
    this.translationService.initializeLanguage();
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
    );
  }

  createList() {
    if (this.sessionId) {
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

        this.showAlert(this.getText('LIST_CREATED'), 'success');

      } else {
        this.showAlert(this.getText('ERROR_CREATING_LIST'), 'danger');

      }

    }
  }

  fillList() {
    this.listService.getLists(this.account_id).subscribe(response => {
      this.lists = response.results;
    });
  }

  showAlert(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000); 
  }

  getText(key: string): string {
    return this.translationService.translate(key);
  }
}
