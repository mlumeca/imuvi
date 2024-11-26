import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  
  userName = '';
  userPhoto = '';

  ngOnInit(): void {
    this.userName = localStorage.getItem('user_name') ?? '';
    this.userPhoto = localStorage.getItem('user_photo')
    ? `https://image.tmdb.org/t/p/w50_and_h50_face${localStorage.getItem(
        'user_photo'
      )}`
    : '';

  }

  
}
