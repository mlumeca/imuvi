import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { Language } from '../../models/configuration.interfaces';
import { TranslationService } from '../../services/translation.service';
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
  selectedLanguage = 'es-ES,ES';
  currentLanguage = 'es';

  translations = {
    'es': {
      'HOME': 'Inicio',
      'MOVIES': 'Películas',
      'SERIES': 'Series',
      'ACTORS': 'Actores',
      'RATINGS': 'Valoraciones',
      'LISTS': 'Listas',
      'FAVORITES': 'Favoritos',
      'WATCHLIST': 'Lista de seguimiento',
      'LOGOUT': 'Cerrar sesión',
      'LOGIN': 'Iniciar sesión'
    },
    'en': {
      'HOME': 'Home',
      'MOVIES': 'Movies',
      'SERIES': 'Series',
      'ACTORS': 'Actors',
      'RATINGS': 'Ratings',
      'LISTS': 'Lists',
      'FAVORITES': 'Favorites',
      'WATCHLIST': 'Watchlist',
      'LOGOUT': 'Logout',
      'LOGIN': 'Login'
    }
  } as any;

  constructor(private authService: AuthService,
    private accountService: AccountService, private translationService: TranslationService
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


    this.selectedLanguage = localStorage.getItem('selectedLanguage')!;
    if(this.selectedLanguage === 'es-ES,ES') {
      this.currentLanguage = 'es';
    } else {
        this.currentLanguage = 'en';
      }
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
    localStorage.setItem('selectedLanguage', event.value);
    this.translationService.setLanguage(event.value);
    this.selectedLanguage = event.value
    if(event.value === 'es-ES,ES') {
      this.currentLanguage = 'es';
    } else {
      this.currentLanguage = 'en';
    }
    window.location.reload();
  }

  getText(palabra: string): string {
    return this.translations[this.currentLanguage][palabra];
  }
}


