export interface UserListsResponse {
    page: number
    results: UserList[]
    total_pages: number
    total_results: number
}
  
export interface UserList {
    description: string
    favorite_count: number
    id: number
    item_count: number
    iso_639_1: string
    list_type: string
    name: string
    poster_path: any
}
  