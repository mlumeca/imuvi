export interface SeriesDetailResponse {
    adult: boolean
    backdrop_path: string
    created_by: any[]
    episode_run_time: number[]
    first_air_date: string
    genres: Genre[]
    homepage: string
    id: number
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: LastEpisodeToAir
    name: string
    next_episode_to_air: any
    networks: Network[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: any[]
    production_countries: ProductionCountry[]
    seasons: Season[]
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    type: string
    vote_average: number
    vote_count: number
  }
  
  export interface Genre {
    id: number
    name: string
  }
  
  export interface LastEpisodeToAir {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: any
  }
  
  export interface Network {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }
  
  export interface ProductionCountry {
    iso_3166_1: string
    name: string
  }
  
  export interface Season {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
  }
  
  export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
  }


  //CREDITS
  export interface SeriesCreditResponse {
    cast: Cast[]
    crew: Crew[]
    id: number
  }
  
  export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    character: string
    credit_id: string
    order: number
  }
  
  export interface Crew {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string
    credit_id: string
    department: string
    job: string
  }
  

  //
  export interface SeriesPlatformResponse {
    id: number
    results: Results
  }
  
  export interface Results {
    AE: Ae
    AR: Ar
    AT: At
    AU: Au
    BA: Ba
    BB: Bb
    BE: Be
    BG: Bg
    BO: Bo
    BR: Br
    BS: Bs
    CA: Ca
    CH: Ch
    CI: Ci
    CL: Cl
    CO: Co
    CR: Cr
    CZ: Cz
    DE: De
    DK: Dk
    DO: Do
    DZ: Dz
    EC: Ec
    EG: Eg
    ES: Es
    FI: Fi
    FR: Fr
    GB: Gb
    GF: Gf
    GH: Gh
    GQ: Gq
    GT: Gt
    HK: Hk
    HN: Hn
    HR: Hr
    HU: Hu
    ID: Id
    IE: Ie
    IL: Il
    IQ: Iq
    IT: It
    JM: Jm
    JP: Jp
    KE: Ke
    KR: Kr
    LB: Lb
    LT: Lt
    LY: Ly
    MD: Md
    MK: Mk
    MU: Mu
    MX: Mx
    MY: My
    MZ: Mz
    NE: Ne
    NG: Ng
    NL: Nl
    NO: No
    NZ: Nz
    PA: Pa
    PE: Pe
    PH: Ph
    PL: Pl
    PS: Ps
    PT: Pt
    PY: Py
    RO: Ro
    RS: Rs
    RU: Ru
    SA: Sa
    SC: Sc
    SE: Se
    SG: Sg
    SI: Si
    SK: Sk
    SN: Sn
    SV: Sv
    TH: Th
    TR: Tr
    TT: Tt
    TW: Tw
    TZ: Tz
    UG: Ug
    US: Us
    UY: Uy
    VE: Ve
    ZA: Za
    ZM: Zm
  }
  
  export interface Ae {
    link: string
    flatrate: Flatrate[]
  }
  
  export interface Flatrate {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ar {
    link: string
    flatrate: Flatrate2[]
  }
  
  export interface Flatrate2 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface At {
    link: string
    buy: Buy[]
    flatrate: Flatrate3[]
  }
  
  export interface Buy {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate3 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Au {
    link: string
    flatrate: Flatrate4[]
    buy: Buy2[]
  }
  
  export interface Flatrate4 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy2 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ba {
    link: string
    flatrate: Flatrate5[]
  }
  
  export interface Flatrate5 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bb {
    link: string
    flatrate: Flatrate6[]
  }
  
  export interface Flatrate6 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Be {
    link: string
    flatrate: Flatrate7[]
  }
  
  export interface Flatrate7 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bg {
    link: string
    flatrate: Flatrate8[]
  }
  
  export interface Flatrate8 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bo {
    link: string
    flatrate: Flatrate9[]
  }
  
  export interface Flatrate9 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Br {
    link: string
    flatrate: Flatrate10[]
  }
  
  export interface Flatrate10 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bs {
    link: string
    flatrate: Flatrate11[]
  }
  
  export interface Flatrate11 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ca {
    link: string
    buy: Buy3[]
    flatrate: Flatrate12[]
  }
  
  export interface Buy3 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate12 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ch {
    link: string
    flatrate: Flatrate13[]
    buy: Buy4[]
  }
  
  export interface Flatrate13 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy4 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ci {
    link: string
    flatrate: Flatrate14[]
  }
  
  export interface Flatrate14 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cl {
    link: string
    flatrate: Flatrate15[]
  }
  
  export interface Flatrate15 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Co {
    link: string
    flatrate: Flatrate16[]
  }
  
  export interface Flatrate16 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cr {
    link: string
    flatrate: Flatrate17[]
  }
  
  export interface Flatrate17 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cz {
    link: string
    flatrate: Flatrate18[]
  }
  
  export interface Flatrate18 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface De {
    link: string
    buy: Buy5[]
    flatrate: Flatrate19[]
  }
  
  export interface Buy5 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate19 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Dk {
    link: string
    flatrate: Flatrate20[]
  }
  
  export interface Flatrate20 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Do {
    link: string
    flatrate: Flatrate21[]
  }
  
  export interface Flatrate21 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Dz {
    link: string
    flatrate: Flatrate22[]
  }
  
  export interface Flatrate22 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ec {
    link: string
    flatrate: Flatrate23[]
  }
  
  export interface Flatrate23 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Eg {
    link: string
    flatrate: Flatrate24[]
  }
  
  export interface Flatrate24 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Es {
    link: string
    flatrate: Flatrate25[]
  }
  
  export interface Flatrate25 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Fi {
    link: string
    buy: Buy6[]
    flatrate: Flatrate26[]
  }
  
  export interface Buy6 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate26 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Fr {
    link: string
    buy: Buy7[]
    flatrate: Flatrate27[]
  }
  
  export interface Buy7 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate27 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gb {
    link: string
    flatrate: Flatrate28[]
    buy: Buy8[]
  }
  
  export interface Flatrate28 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy8 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gf {
    link: string
    flatrate: Flatrate29[]
  }
  
  export interface Flatrate29 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gh {
    link: string
    flatrate: Flatrate30[]
  }
  
  export interface Flatrate30 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gq {
    link: string
    flatrate: Flatrate31[]
  }
  
  export interface Flatrate31 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gt {
    link: string
    flatrate: Flatrate32[]
  }
  
  export interface Flatrate32 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hk {
    link: string
    flatrate: Flatrate33[]
  }
  
  export interface Flatrate33 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hn {
    link: string
    flatrate: Flatrate34[]
  }
  
  export interface Flatrate34 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hr {
    link: string
    flatrate: Flatrate35[]
  }
  
  export interface Flatrate35 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hu {
    link: string
    flatrate: Flatrate36[]
  }
  
  export interface Flatrate36 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Id {
    link: string
    flatrate: Flatrate37[]
  }
  
  export interface Flatrate37 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ie {
    link: string
    flatrate: Flatrate38[]
    buy: Buy9[]
  }
  
  export interface Flatrate38 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy9 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Il {
    link: string
    flatrate: Flatrate39[]
  }
  
  export interface Flatrate39 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Iq {
    link: string
    flatrate: Flatrate40[]
  }
  
  export interface Flatrate40 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface It {
    link: string
    buy: Buy10[]
    flatrate: Flatrate41[]
  }
  
  export interface Buy10 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate41 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Jm {
    link: string
    flatrate: Flatrate42[]
  }
  
  export interface Flatrate42 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Jp {
    link: string
    flatrate: Flatrate43[]
    buy: Buy11[]
    rent: Rent[]
  }
  
  export interface Flatrate43 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy11 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ke {
    link: string
    flatrate: Flatrate44[]
  }
  
  export interface Flatrate44 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Kr {
    link: string
    flatrate: Flatrate45[]
  }
  
  export interface Flatrate45 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Lb {
    link: string
    flatrate: Flatrate46[]
  }
  
  export interface Flatrate46 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Lt {
    link: string
    flatrate: Flatrate47[]
  }
  
  export interface Flatrate47 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ly {
    link: string
    flatrate: Flatrate48[]
  }
  
  export interface Flatrate48 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Md {
    link: string
    flatrate: Flatrate49[]
  }
  
  export interface Flatrate49 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mk {
    link: string
    flatrate: Flatrate50[]
  }
  
  export interface Flatrate50 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mu {
    link: string
    flatrate: Flatrate51[]
  }
  
  export interface Flatrate51 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mx {
    link: string
    flatrate: Flatrate52[]
  }
  
  export interface Flatrate52 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface My {
    link: string
    flatrate: Flatrate53[]
  }
  
  export interface Flatrate53 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mz {
    link: string
    flatrate: Flatrate54[]
  }
  
  export interface Flatrate54 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ne {
    link: string
    flatrate: Flatrate55[]
  }
  
  export interface Flatrate55 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ng {
    link: string
    flatrate: Flatrate56[]
  }
  
  export interface Flatrate56 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Nl {
    link: string
    flatrate: Flatrate57[]
    buy: Buy12[]
  }
  
  export interface Flatrate57 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy12 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface No {
    link: string
    flatrate: Flatrate58[]
    buy: Buy13[]
  }
  
  export interface Flatrate58 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy13 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Nz {
    link: string
    flatrate: Flatrate59[]
  }
  
  export interface Flatrate59 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pa {
    link: string
    flatrate: Flatrate60[]
  }
  
  export interface Flatrate60 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pe {
    link: string
    flatrate: Flatrate61[]
  }
  
  export interface Flatrate61 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ph {
    link: string
    flatrate: Flatrate62[]
  }
  
  export interface Flatrate62 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pl {
    link: string
    flatrate: Flatrate63[]
    rent: Rent2[]
  }
  
  export interface Flatrate63 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent2 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ps {
    link: string
    flatrate: Flatrate64[]
  }
  
  export interface Flatrate64 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pt {
    link: string
    flatrate: Flatrate65[]
  }
  
  export interface Flatrate65 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Py {
    link: string
    flatrate: Flatrate66[]
  }
  
  export interface Flatrate66 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ro {
    link: string
    flatrate: Flatrate67[]
  }
  
  export interface Flatrate67 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rs {
    link: string
    flatrate: Flatrate68[]
  }
  
  export interface Flatrate68 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ru {
    link: string
    flatrate: Flatrate69[]
    ads: Ad[]
  }
  
  export interface Flatrate69 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ad {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sa {
    link: string
    flatrate: Flatrate70[]
  }
  
  export interface Flatrate70 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sc {
    link: string
    flatrate: Flatrate71[]
  }
  
  export interface Flatrate71 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Se {
    link: string
    flatrate: Flatrate72[]
    buy: Buy14[]
  }
  
  export interface Flatrate72 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy14 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sg {
    link: string
    flatrate: Flatrate73[]
  }
  
  export interface Flatrate73 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Si {
    link: string
    flatrate: Flatrate74[]
  }
  
  export interface Flatrate74 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sk {
    link: string
    flatrate: Flatrate75[]
  }
  
  export interface Flatrate75 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sn {
    link: string
    flatrate: Flatrate76[]
  }
  
  export interface Flatrate76 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sv {
    link: string
    flatrate: Flatrate77[]
  }
  
  export interface Flatrate77 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Th {
    link: string
    flatrate: Flatrate78[]
  }
  
  export interface Flatrate78 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tr {
    link: string
    flatrate: Flatrate79[]
  }
  
  export interface Flatrate79 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tt {
    link: string
    flatrate: Flatrate80[]
  }
  
  export interface Flatrate80 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tw {
    link: string
    flatrate: Flatrate81[]
  }
  
  export interface Flatrate81 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tz {
    link: string
    flatrate: Flatrate82[]
  }
  
  export interface Flatrate82 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ug {
    link: string
    flatrate: Flatrate83[]
  }
  
  export interface Flatrate83 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Us {
    link: string
    free: Free[]
    buy: Buy15[]
    flatrate: Flatrate84[]
  }
  
  export interface Free {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy15 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate84 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Uy {
    link: string
    flatrate: Flatrate85[]
  }
  
  export interface Flatrate85 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ve {
    link: string
    flatrate: Flatrate86[]
  }
  
  export interface Flatrate86 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Za {
    link: string
    flatrate: Flatrate87[]
  }
  
  export interface Flatrate87 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Zm {
    link: string
    flatrate: Flatrate88[]
  }
  
  export interface Flatrate88 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  


  //MEDIA
  export interface SeriesMediaResponse {
    backdrops: Backdrop[]
    id: number
    logos: Logo[]
    posters: Poster[]
  }
  
  export interface Backdrop {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  export interface Logo {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  export interface Poster {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  