export interface TrendingResponse {
    page: number
    results: Trending[]
    total_pages: number
    total_results: number
}

export interface Trending {
    backdrop_path: string
    id: number
    name?: string
    original_name?: string
    overview: string
    poster_path: string
    media_type: string
    adult: boolean
    original_language: string
    genre_ids: number[]
    popularity: number
    first_air_date?: string
    vote_average: number
    vote_count: number
    origin_country?: string[]
    title?: string
    original_title?: string
    release_date?: string
    video?: boolean
}

export interface MovieVideoResponse {
    id: number
    results: MovieVideo[]
}

export interface MovieVideo {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}


export interface TrendingActorsResponse {
    page: number
    results: Actor[]
    total_pages: number
    total_results: number
}

export interface Actor {
    id: number
    name: string
    original_name: string
    media_type: string
    adult: boolean
    popularity: number
    gender: number
    known_for_department?: string
    profile_path?: string
}


export interface UpcomingMoviesResponse {
    dates: Dates
    page: number
    results: UpcomingMovies[]
    total_pages: number
    total_results: number
}

export interface Dates {
    maximum: string
    minimum: string
}

export interface UpcomingMovies {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
