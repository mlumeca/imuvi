import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { UserListsResponse } from '../models/user-lists.interface';

const API_KEY = '6167e502c63acdce5db7c32294a559d3';
const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<AccountDetailsResponse>(
      `${API_BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
    );
  }

  getUserLists(userId: number): Observable<UserListsResponse> {
    return this.http.get<UserListsResponse>(`${API_BASE_URL}/account/${userId}/lists?api_key=${API_KEY}`)
  }

  createList(listName: string, listDesc: string): Observable<any> {
    return this.http.post(`${API_BASE_URL}/list?api_key=${API_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      listName,
      listDesc  //PASAR URL+BODY 
    });
  }

  addToList(listId: number, mediaId: number, mediaType: string): Observable<any> {
    return this.http.post(`${API_BASE_URL}/list/${listId}/add_item?api_key=${API_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_id: mediaId,
      media_type: mediaType,
    });
  }

  //PENDIENTE VER COMO ACCEDER A LOS DETALLES DE UNA LISTA PARA PINTAR LOS CARDS, BY ID???
  getListDetailById(userId:number, model: any): Observable<any> {
    return this.http.get<UserListsResponse>(`${API_BASE_URL}/account/${userId}/lists?api_key=${API_KEY}`)
  }
  
  

  
}