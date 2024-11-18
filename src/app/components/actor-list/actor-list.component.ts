import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { ActorList } from '../../models/actor-list.interface';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit {

  actorList: ActorList[] = [];
  listaActoresFiltrada: ActorList[] = [];
  nombreOriginal: ActorList[] = [];
  nombreFiltrado: ActorList[] = [];
  terminoBusqueda: string = '';
  noResultsMessage: string = '';


  constructor(private actorService: ActorService) {}

  ngOnInit(): void {

    this.actorService.getPopular().subscribe((resp) => {
      this.actorList = resp.results;
      this.nombreOriginal = resp.results;
      this.listaActoresFiltrada = resp.results;
    })

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
  }

  seleccionarNombre(actor: ActorList): void {
    this.terminoBusqueda = actor.name;

    this.listaActoresFiltrada = this.actorList.filter((actor) => {
      const nombreActor = actor.name;

      return nombreActor === this.terminoBusqueda;
    });

    if (this.listaActoresFiltrada.length === 0) {
      this.noResultsMessage = 'No existe ningun actor con ese nombre.';
    } else {
      this.noResultsMessage = '';
    }
  }

  resetBuscarNombre(): void {
    this.terminoBusqueda = '';

    this.listaActoresFiltrada = this.actorList;

    this.nombreFiltrado = this.nombreOriginal;

    this.noResultsMessage = '';
  }

}
