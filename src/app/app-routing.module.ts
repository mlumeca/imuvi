import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesDetailComponent } from './components/series-detail/series-detail.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { RatingListComponent } from './components/rating-list/rating-list.component';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'series-list', component: SeriesListComponent },
  { path: 'series-detail/:id', component: SeriesDetailComponent },
  { path: 'actor-list', component: ActorListComponent },
  { path: 'actor-detail/:id', component: ActorDetailComponent },
  { path: 'rating', component: RatingListComponent },
  { path: 'listSeguimiento', component: ListProfileComponent },
  { path: 'list', component: UserListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'approved', component: ApprovedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
