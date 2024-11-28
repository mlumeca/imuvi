import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Item, ListDetailResponse } from '../../models/list-detail.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserList } from '../../models/user-lists.interface';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {
  @Input() listName: string = '';
  @Input() listDesc: string = '';
  listId: string | null = '';
  lists: ListDetailResponse | undefined;
  item: Item[] = [];
  moviesCount: number = 0;
  seriesCount: number = 0;
  totalCount: number = 0;
  averageRating: number = 0;
  closeResult = '';

  constructor(private listService: ListService, private route: ActivatedRoute, private accountService: AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.listService.getOneList(this.listId!).subscribe(response => {
      this.lists = response;
    })

    this.listId = this.route.snapshot.paramMap.get('id');
    if (this.listId) {
      this.listService.getOneList(this.listId).subscribe((response) => {
        this.lists = response;
        this.item = response.items;
        this.calculateTotalCount();
        this.calculateAverageRating();
      });
    }
  }

  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }
  getRatingPercentaje(number: number) {
    return number * 10;
  }

  calculateTotalCount(): void {
    this.totalCount = this.item.length;
  }

  calculateAverageRating(): void {
    const totalRating = this.item.reduce((sum, item) => sum + item.vote_average, 0);
    this.averageRating = this.item.length > 0 ? totalRating / this.item.length : 0;
  }

  deleteList(listId: string) {
    this.accountService.deleteUserList(listId).subscribe(response => {
        alert('Lista eliminada.');
    });
  }

  updateList(listId:string, listName: string, listDesc: string) {
    this.accountService.updateUserList(listId, listName, listDesc).subscribe(response => {
      this.lists!.name = listName;
      this.lists!.description = listDesc;

      alert('Lista actualizada.');
      console.log(response)
    });
    

  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
		);
	}

  
    
}


