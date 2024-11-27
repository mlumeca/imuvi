import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { UserList } from '../../models/user-lists.interface';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrl: './modal-list.component.css'
})
export class ModalListComponent{
  @Input() listName: string = '';
  @Input() listDesc: string = '';
  listId: number | undefined;
  userLists: UserList[] = []; 
  sessionId = localStorage.getItem('session_id');

  constructor(private accountService: AccountService, public activeModal: NgbActiveModal) {}

 
  createList() {
    if (this.sessionId ) {
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
  
          this.listName = ''; 
          this.listDesc = '';
        });
  
        alert(`Lista "${this.listName}" creada.`);
  
      } else {
        alert(`El nombre de la lista es obligatorio.`);
  
      }

    } else {
      alert(`Inicie sesión`)
    }
    
  }
  

}
