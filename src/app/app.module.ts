import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { provideHttpClient } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesDetailComponent } from './components/series-detail/series-detail.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ApprovedComponent } from './components/approved/approved.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PageNotFoundComponent,
    MovieListComponent,
    MovieDetailComponent,
    SeriesListComponent,
    SeriesDetailComponent,
    ActorListComponent,
    ActorDetailComponent,
    HomeComponent,
    ApprovedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    NgbDropdownModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
