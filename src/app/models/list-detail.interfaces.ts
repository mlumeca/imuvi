export interface ListDetailResponse {
    created_by: string
    description: string
    favorite_count: number
    id: string
    items: Item[]
    item_count: number
    iso_639_1: string
    name: string
    poster_path: string
}

export interface Item {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    media_type: string
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
