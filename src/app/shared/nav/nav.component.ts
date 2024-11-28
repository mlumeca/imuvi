import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { ConfigurationService } from '../../services/configuration.service';
import { Language } from '../../models/configuration.interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  userName = '';
  userPhoto = '';
  langua: Language[] = [];

  constructor(private authService: AuthService,
    private accountService: AccountService, private configuration: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('user_name') ?? '';
    this.userPhoto = localStorage.getItem('user_photo')
      ? `https://image.tmdb.org/t/p/w50_and_h50_face${localStorage.getItem(
        'user_photo'
      )}`
      : '';
    this.accountService.getAccountDetails().subscribe(response => {
      localStorage.setItem('account_id', response.id.toString());
    });

    this.configuration.getLanguages().subscribe(res => {
      console.log('Idiomas obtenidos:', res);
      this.langua = res;
    });
  }

  createRequestToken() {
    this.authService.createRequestToken().subscribe((response) => {
      localStorage.setItem('token', response.request_token);

      // STEP 2 de la autenticación en TMDB (firma del token iniciando sesión en TMDB)
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/approved`;
    });
  }

  isLoggedIn() {
    return localStorage.getItem('logged_in') === 'true';
  }

  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200';
  }

}

