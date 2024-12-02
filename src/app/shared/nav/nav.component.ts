import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { ConfigurationService } from '../../services/configuration.service';
import { Language } from '../../models/configuration.interfaces';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  userName = '';
  userPhoto = '';
  language: Language[] = [];
  selectedLanguage: String = ''

  constructor(private authService: AuthService,
    private accountService: AccountService, private configurationService: ConfigurationService
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

    this.configurationService.getLanguages().subscribe(res => {
      console.log('Idiomas obtenidos:', res);
      this.language = res;
    });
    this.selectedLanguage = localStorage.getItem('language')!
    console.log("selectedlanguage",this.selectedLanguage)
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

  changeLanguage(event: MatSelectChange): void {

    localStorage.setItem('language', event.value);

    this.configurationService.setLanguage(event.value);

    this.selectedLanguage = event.value

    console.log("eventvalue", event.value)

    window.location.reload();
  }
  }


