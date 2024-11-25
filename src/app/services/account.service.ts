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

  
}