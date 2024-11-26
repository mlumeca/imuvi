import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrl: './modal-list.component.css'
})
export class ModalListComponent{
  @Input() listName: string = '';
  @Input() listDesc: string = '';

  constructor(private accountService: AccountService, private modalService: NgbModal, public activeModal: NgbActiveModal) {}

 
  createList() {
    console.log(this.listName);
    if (this.listName) {
      this.accountService.createList(this.listName, this.listDesc)

      alert(`Lista "${this.listName}" creada.`);
    }
  }
  

}
