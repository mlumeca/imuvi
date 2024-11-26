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
    const sessionId = localStorage.getItem('session_id');
    return this.http.get<UserListsResponse>(`https://api.themoviedb.org/3/account/${userId}/lists?api_key=${API_KEY}&session_id=${sessionId}`
  );
  }

  createList(listName: string, listDesc: string): Observable<any> {
    return this.http.post(`${API_BASE_URL}/list?api_key=${API_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      name: listName,
      description: listDesc
    });
  }
  
  getListDetailById(listId:number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}`
    );
  }
  
  
}