import { Component } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imuvi';

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('language') || 'en-US';
    this.configurationService.setLanguage(savedLanguage);
  }
}
