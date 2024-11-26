import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {

  constructor(acount: AccountService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
