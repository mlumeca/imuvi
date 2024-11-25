import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrl: './modal-list.component.css'
})
export class ModalListComponent implements OnInit{
  @Input() listName: string = '';
  @Input() listDesc: string = '';

  constructor(private accountService: AccountService, private modalService: NgbModal) {}

  ngOnInit(): void {
    
    this.openCreateListModal;
  }


  openCreateListModal(content: any): void {
    this.modalService.open(content, { centered: true });
  }

  createList() {
    if (this.listName) {
      alert(`Lista "${this.listName}" creada exitosamente.`);
    }
  }
  

}
