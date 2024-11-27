import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../services/account.service';
import { UserList } from '../../models/user-lists.interface';
import { AccountDetailsResponse } from '../../models/account-details.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userList: UserList[] = [];
  userId: number = 0;
  

  constructor(private accountService: AccountService ,  private modalService: NgbModal) {}


  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(response => {
      this.userId = response.id;

    })

    this.accountService.getUserLists(this.userId).subscribe(response => {
      this.userList = response.results;
    })

  }

   


}
