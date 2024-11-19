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
  