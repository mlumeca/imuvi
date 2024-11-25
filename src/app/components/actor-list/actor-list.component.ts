import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Actor} from '../../models/actor-list.interface';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit {

  actorList: Actor[] = [];
  listaActoresFiltrada: Actor[] = [];
  nombreOriginal: Actor[] = [];
  nombreFiltrado: Actor[] = [];
  terminoBusqueda: string = '';
  page = 1;
  totalPages = 1;
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.newPage();
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  buscarNombre(): void {
    if (this.terminoBusqueda) {

      this.nombreFiltrado = this.nombreOriginal.filter((actor) =>
        actor.name.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
    } else {
      this.nombreFiltrado = this.nombreOriginal;
    }
    console.log(this.terminoBusqueda);

  }

  seleccionarNombre(actor: Actor): void {
    this.terminoBusqueda = actor.name;

    this.listaActoresFiltrada = this.actorList.filter((actor) => {
      const nombreActor = actor.name;
      return nombreActor === this.terminoBusqueda;
    });

  }

  resetBuscarNombre(): void {
    this.terminoBusqueda = '';
    this.listaActoresFiltrada = this.actorList;
    this.nombreFiltrado = this.nombreOriginal;
  }

  newPage(): void {
    this.actorService.getPeoplePage(this.page).subscribe(resp => {
      this.listaActoresFiltrada = resp.results;
      this.actorList = resp.results;
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }
}
