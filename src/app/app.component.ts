import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imuvi';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.setLanguage(localStorage.getItem('language') || 'en');
  }
}
