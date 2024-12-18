import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = 'es';

  private translations = {
    'es': {
      'HOME': 'Inicio',
      'MOVIES': 'Películas',
      'ACTORS': 'Actores',
      'RATINGS': 'Valoraciones',
      'LISTS': 'Listas',
      'FAVORITES': 'Favoritos',
      'WATCHLIST': 'Lista de seguimiento',
      'LOGOUT': 'Cerrar sesión',
      'LOGIN': 'Iniciar sesión',
      'TRENDING':'Tendencias',
      'WELCOME':'Bienvenido, ¿Qué deseas ver hoy?',
      'POPULAR_ACTORS':'Actores Populares',
      'FILTERS':'Filtros',
      'GENRES':'Géneros',
      'TRAILERS':'Últimos Tráileres',
      'SCORE':'Puntuación',
      'RELEASE_DATE':'Fecha de estreno',
      'FROM':'Desde',
      'TO':'Hasta',
      'APPLY':'Aplicar',
      'SEARCH':'Buscar',
      'ADD_TO_LIST':'Añadir a lista',
      'RATES':'Valoraciones',
      'CONFIRM_DELETE_RATING':'¿Está seguro de que desea eliminar esta valoración?',
      'DELETE':'Eliminar',
      'DELETE_RATING':'Eliminar valoración',
      'ITEM_REMOVED': 'Item eliminado.',
      'ITEM_ADDED_TO_LIST': 'Elemento añadido a la lista.',
      'ITEMS_IN_LIST': 'Elementos en la lista',
      'AVERAGE_RATING': 'Valoración media',
      'CONFIRM_DELETE_ITEM': '¿Está seguro de que desea eliminar esta película?',
      'DELETE_ITEM': 'Eliminar película',
      'CONFIRM_DELETE_LIST': '¿Está seguro de que desea eliminar esta lista?',
      'DELETE_LIST': 'Eliminar lista',
      'UPDATE_LIST': 'Actualizar lista',
      'LIST_NAME': 'Nombre de la lista',
      'LIST_DESCRIPTION': 'Descripción',
      'NO_MOVIES_IN_WATCHLIST': 'No hay películas en la lista de seguimiento.',
      'NO_SERIES_IN_WATCHLIST': 'No hay series en la lista de seguimiento.',
      'NO_DESCRIPTION': 'No tiene descripción.',
      'ITEMS': 'elementos',
      'CREATE_LIST': 'Crear lista',
      'LIST_CREATED': 'Lista creada.',
      'ERROR_CREATING_LIST': 'Error al crear la lista. Introduzca un nombre',
      'CREATE_NEW_LIST': 'Crear nueva lista',
      'NEW_LIST': 'Nueva lista',
      'ADD_MOVIE_TO_LIST': 'Añadir pelicula',
      'SELECT_LIST': 'Seleccionar lista',
      'SELECT_A_LIST': 'Seleccione una lista',
      'MEDIA': 'Media',
      'GENERAL_VIEW': 'Vista general',
      'ORIGINAL_TITLE': 'Título original',
      'ORIGINAL_LANGUAGE': 'Idioma original',
      'YOUR_RATING': 'Tu Valoración',
      'PLATFORMS': 'Plataformas',
      'NOT_AVAILABLE_IN_ANY_PLATFORM': 'No disponible en ninguna plataforma.',
      'CAST': 'Reparto',
      'NO_CAST_AVAILABLE': 'No tenemos reparto disponible.',
      'SEASONS': 'Temporadas',
      'UNKNOWN_YEAR': 'Año desconocido',
      'EPISODES_NOT_FOUND': 'Episodios no encontrados',
      'EPISODES': 'episodios',
      'THE': 'La',
      'SEASON_OF': 'temporada',
      'WAS_RELEASED_ON': 'salió el',
      'NO_DESCRIPTION_AVAILABLE': 'No tenemos descripcion.',
      'NO_INFORMATION_AVAILABLE': 'No tenemos dicha información',
      'ADD_SERIE_TO_LIST': 'Añadir serie',
      'ADD_TO_FAVORITES': 'Añadir a favoritos',
      'ADD_TO_WATCHLIST': 'Añadir a lista de seguimiento',
      'NO_BIOGRAPHY': 'No tenemos biografía de',
      'BIRTHDAY': 'Cumpleaños',
      'CREDITS': 'Acreditación',
      'AS': 'Como',
      'INTERPRETATION': 'Interpretación',
      'PLACE_OF_BIRTH': 'Lugar de nacimiento',
      'KNOWN_FOR': 'Conocido por',

    },
    'en': {
      'HOME': 'Home',
      'MOVIES': 'Movies',
      'ACTORS': 'Actors',
      'RATINGS': 'Ratings',
      'LISTS': 'Lists',
      'FAVORITES': 'Favorites',
      'WATCHLIST': 'Watchlist',
      'LOGOUT': 'Logout',
      'LOGIN': 'Login',
      'TRENDING':'Trending',
      'WELCOME':'Welcome, what do you want to watch today?',
      'POPULAR_ACTORS':'Popular Actors',
      'FILTERS':'Filters',
      'GENRES':'Genres',
      'TRAILERS':'Latest Trailers',
      'SCORE':'Score',
      'RELEASE_DATE':'Release Date',
      'FROM':'From',
      'TO':'To',
      'APPLY':'Apply',
      'SEARCH':'Search',
      'ADD_TO_LIST':'Add to list',
      'RATES':'Ratings',
      'CONFIRM_DELETE_RATING':'Are you sure you want to delete this rating?',
      'DELETE':'Delete',
      'DELETE_RATING':'Delete Rating',
      'ITEM_REMOVED': 'Item removed.',
      'ITEM_ADDED_TO_LIST': 'Item added to list.',
      'ITEMS_IN_LIST': 'Items in list',
      'AVERAGE_RATING': 'Average rating',
      'CONFIRM_DELETE_ITEM': 'Are you sure you want to delete this movie?',
      'DELETE_ITEM': 'Delete movie',
      'CONFIRM_DELETE_LIST': 'Are you sure you want to delete this list?',
      'DELETE_LIST': 'Delete list',
      'UPDATE_LIST': 'Update list',
      'LIST_NAME': 'List name',
      'LIST_DESCRIPTION': 'Description',
      'NEW_LIST': 'New list',
      'NO_DESCRIPTION': 'No description.',
      'ITEMS': 'items',
      'CREATE_LIST': 'Create list',
      'LIST_CREATED': 'List created.',
      'ERROR_CREATING_LIST': 'Error creating list. Enter a name',
      'ADD_MOVIE_TO_LIST': 'Add movie',
      'SELECT_LIST': 'Select list',
      'SELECT_A_LIST': 'Select a list',
      'CREATE_NEW_LIST': 'Create new list',
      'MEDIA': 'Media',
      'GENERAL_VIEW': 'General view',
      'ORIGINAL_TITLE': 'Original title',
      'ORIGINAL_LANGUAGE': 'Original language',
      'YOUR_RATING': 'Your rating',
      'PLATFORMS': 'Platforms',
      'NOT_AVAILABLE_IN_ANY_PLATFORM': 'Not available in any platform.',
      'CAST': 'Cast',
      'NO_CAST_AVAILABLE': 'We dont have cast available.',
      'SEASONS': 'Seasons',
      'UNKNOWN_YEAR': 'Unknown year',
      'EPISODES_NOT_FOUND': 'Episodes not found',
      'EPISODES': 'episodes',
      'THE': 'The',
      'SEASON_OF': 'season of',
      'WAS_RELEASED_ON': 'was released on',
      'NO_DESCRIPTION_AVAILABLE': 'We dont have description.',
      'ADD_SERIE_TO_LIST': 'Add serie',
      'ADD_TO_FAVORITES': 'Add to favorites',
      'ADD_TO_WATCHLIST': 'Add to watchlist',
      'NO_BIOGRAPHY': 'We dont have biography of',
      'BIRTHDAY': 'Birthday',
      'CREDITS': 'Credits',
      'AS': 'As',
      'INTERPRETATION': 'Interpretation',
      'PLACE_OF_BIRTH': 'Place of birth',
      'KNOWN_FOR': 'Known for',
    }
  } as any;

  setLanguage(language: string): void {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
  }

  getLanguage(): string {
    return localStorage.getItem('language') || this.currentLanguage;
  }

  translate(word: string): string {
    return this.translations[this.currentLanguage][word];
  }

  initializeLanguage() {
        if(localStorage.getItem('selectedLanguage') === 'es-ES,ES') {
            this.currentLanguage = 'es';
        } else {
            this.currentLanguage = 'en';
        }
    }
  }
