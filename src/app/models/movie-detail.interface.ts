export interface MovieDetailResponse {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
  export interface Genre {
    id: number
    name: string
  }
  
  export interface ProductionCompany {
    id: number
    logo_path?: string
    name: string
    origin_country: string
  }
  
  export interface ProductionCountry {
    iso_3166_1: string
    name: string
  }
  
  export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
  }
  

  // CAST
  export interface MovieCreditResponse {
    id: number
    cast: Cast[]
    crew: Crew[]
  }
  
  export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string
    cast_id: number
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
  
  //WATCH PROVIDERS
  export interface MoviePlatformResponse {
    id: number
    results: Results
  }
  
  export interface Results {
    AD: Ad
    AE: Ae
    AO: Ao
    AR: Ar
    AT: At
    AU: Au
    AZ: Az
    BA: Ba
    BE: Be
    BF: Bf
    BG: Bg
    BH: Bh
    BO: Bo
    BR: Br
    BY: By
    BZ: Bz
    CA: Ca
    CH: Ch
    CI: Ci
    CL: Cl
    CM: Cm
    CO: Co
    CR: Cr
    CV: Cv
    CY: Cy
    CZ: Cz
    DE: De
    DK: Dk
    DO: Do
    DZ: Dz
    EC: Ec
    EE: Ee
    EG: Eg
    ES: Es
    FI: Fi
    FR: Fr
    GB: Gb
    GF: Gf
    GH: Gh
    GQ: Gq
    GR: Gr
    GT: Gt
    GY: Gy
    HK: Hk
    HN: Hn
    HR: Hr
    HU: Hu
    ID: Id
    IE: Ie
    IL: Il
    IN: In
    IQ: Iq
    IS: Is
    IT: It
    JO: Jo
    JP: Jp
    KE: Ke
    KR: Kr
    KW: Kw
    LB: Lb
    LI: Li
    LT: Lt
    LU: Lu
    LV: Lv
    LY: Ly
    MA: Ma
    MC: Mc
    MD: Md
    ME: Me
    MG: Mg
    MK: Mk
    ML: Ml
    MU: Mu
    MX: Mx
    MY: My
    MZ: Mz
    NE: Ne
    NG: Ng
    NI: Ni
    NL: Nl
    NO: No
    NZ: Nz
    OM: Om
    PA: Pa
    PE: Pe
    PF: Pf
    PG: Pg
    PH: Ph
    PL: Pl
    PS: Ps
    PT: Pt
    PY: Py
    QA: Qa
    RO: Ro
    RS: Rs
    RU: Ru
    SA: Sa
    SC: Sc
    SE: Se
    SG: Sg
    SI: Si
    SK: Sk
    SM: Sm
    SN: Sn
    SV: Sv
    TD: Td
    TH: Th
    TN: Tn
    TR: Tr
    TW: Tw
    TZ: Tz
    UA: Ua
    UG: Ug
    US: Us
    UY: Uy
    VE: Ve
    YE: Ye
    ZA: Za
    ZM: Zm
    ZW: Zw
  }
  
  export interface Ad {
    link: string
    flatrate: Flatrate[]
  }
  
  export interface Flatrate {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ae {
    link: string
    rent: Rent[]
    flatrate: Flatrate2[]
    buy: Buy[]
  }
  
  export interface Rent {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate2 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ao {
    link: string
    buy: Buy2[]
    rent: Rent2[]
  }
  
  export interface Buy2 {
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
  
  export interface Ar {
    link: string
    rent: Rent3[]
    flatrate: Flatrate3[]
    buy: Buy3[]
  }
  
  export interface Rent3 {
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
  
  export interface Buy3 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface At {
    link: string
    rent: Rent4[]
    flatrate: Flatrate4[]
    buy: Buy4[]
  }
  
  export interface Rent4 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate4 {
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
  
  export interface Au {
    link: string
    buy: Buy5[]
    flatrate: Flatrate5[]
    rent: Rent5[]
  }
  
  export interface Buy5 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate5 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent5 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Az {
    link: string
    buy: Buy6[]
  }
  
  export interface Buy6 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ba {
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
    rent: Rent6[]
    buy: Buy7[]
    flatrate: Flatrate7[]
  }
  
  export interface Rent6 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy7 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate7 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bf {
    link: string
    rent: Rent7[]
    buy: Buy8[]
  }
  
  export interface Rent7 {
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
  
  export interface Bg {
    link: string
    buy: Buy9[]
    flatrate: Flatrate8[]
    rent: Rent8[]
  }
  
  export interface Buy9 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate8 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent8 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bh {
    link: string
    flatrate: Flatrate9[]
  }
  
  export interface Flatrate9 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bo {
    link: string
    rent: Rent9[]
    buy: Buy10[]
    flatrate: Flatrate10[]
  }
  
  export interface Rent9 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy10 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate10 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Br {
    link: string
    rent: Rent10[]
    flatrate: Flatrate11[]
    buy: Buy11[]
  }
  
  export interface Rent10 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate11 {
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
  
  export interface By {
    link: string
    buy: Buy12[]
    rent: Rent11[]
  }
  
  export interface Buy12 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent11 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Bz {
    link: string
    rent: Rent12[]
    flatrate: Flatrate12[]
    buy: Buy13[]
  }
  
  export interface Rent12 {
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
  
  export interface Buy13 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ca {
    link: string
    rent: Rent13[]
    buy: Buy14[]
    flatrate: Flatrate13[]
  }
  
  export interface Rent13 {
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
  
  export interface Flatrate13 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ch {
    link: string
    buy: Buy15[]
    flatrate: Flatrate14[]
    rent: Rent14[]
  }
  
  export interface Buy15 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate14 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent14 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ci {
    link: string
    flatrate: Flatrate15[]
  }
  
  export interface Flatrate15 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cl {
    link: string
    rent: Rent15[]
    flatrate: Flatrate16[]
    buy: Buy16[]
  }
  
  export interface Rent15 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate16 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy16 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cm {
    link: string
    flatrate: Flatrate17[]
  }
  
  export interface Flatrate17 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Co {
    link: string
    buy: Buy17[]
    rent: Rent16[]
    flatrate: Flatrate18[]
  }
  
  export interface Buy17 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent16 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate18 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cr {
    link: string
    rent: Rent17[]
    flatrate: Flatrate19[]
    buy: Buy18[]
  }
  
  export interface Rent17 {
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
  
  export interface Buy18 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cv {
    link: string
    rent: Rent18[]
    buy: Buy19[]
  }
  
  export interface Rent18 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy19 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cy {
    link: string
    buy: Buy20[]
    rent: Rent19[]
  }
  
  export interface Buy20 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent19 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Cz {
    link: string
    rent: Rent20[]
    buy: Buy21[]
    flatrate: Flatrate20[]
  }
  
  export interface Rent20 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy21 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate20 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface De {
    link: string
    buy: Buy22[]
    rent: Rent21[]
    flatrate: Flatrate21[]
  }
  
  export interface Buy22 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent21 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate21 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Dk {
    link: string
    flatrate: Flatrate22[]
    rent: Rent22[]
    buy: Buy23[]
  }
  
  export interface Flatrate22 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent22 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy23 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Do {
    link: string
    flatrate: Flatrate23[]
  }
  
  export interface Flatrate23 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Dz {
    link: string
    flatrate: Flatrate24[]
  }
  
  export interface Flatrate24 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ec {
    link: string
    rent: Rent23[]
    buy: Buy24[]
    flatrate: Flatrate25[]
  }
  
  export interface Rent23 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy24 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate25 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ee {
    link: string
    buy: Buy25[]
    rent: Rent24[]
  }
  
  export interface Buy25 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent24 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Eg {
    link: string
    buy: Buy26[]
    rent: Rent25[]
  }
  
  export interface Buy26 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent25 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Es {
    link: string
    buy: Buy27[]
    flatrate: Flatrate26[]
    rent: Rent26[]
  }
  
  export interface Buy27 {
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
  
  export interface Rent26 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Fi {
    link: string
    buy: Buy28[]
    rent: Rent27[]
    flatrate: Flatrate27[]
  }
  
  export interface Buy28 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent27 {
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
  
  export interface Fr {
    link: string
    rent: Rent28[]
    flatrate: Flatrate28[]
    buy: Buy29[]
  }
  
  export interface Rent28 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate28 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy29 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gb {
    link: string
    flatrate: Flatrate29[]
    rent: Rent29[]
    buy: Buy30[]
  }
  
  export interface Flatrate29 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent29 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy30 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gf {
    link: string
    flatrate: Flatrate30[]
  }
  
  export interface Flatrate30 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gh {
    link: string
    flatrate: Flatrate31[]
  }
  
  export interface Flatrate31 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gq {
    link: string
    flatrate: Flatrate32[]
  }
  
  export interface Flatrate32 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gr {
    link: string
    rent: Rent30[]
    buy: Buy31[]
  }
  
  export interface Rent30 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy31 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gt {
    link: string
    flatrate: Flatrate33[]
    rent: Rent31[]
    buy: Buy32[]
  }
  
  export interface Flatrate33 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent31 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy32 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Gy {
    link: string
    flatrate: Flatrate34[]
  }
  
  export interface Flatrate34 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hk {
    link: string
    buy: Buy33[]
    rent: Rent32[]
    flatrate: Flatrate35[]
  }
  
  export interface Buy33 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent32 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate35 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hn {
    link: string
    flatrate: Flatrate36[]
    rent: Rent33[]
    buy: Buy34[]
  }
  
  export interface Flatrate36 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent33 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy34 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hr {
    link: string
    rent: Rent34[]
    flatrate: Flatrate37[]
    buy: Buy35[]
  }
  
  export interface Rent34 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate37 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy35 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Hu {
    link: string
    rent: Rent35[]
    flatrate: Flatrate38[]
    buy: Buy36[]
  }
  
  export interface Rent35 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate38 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy36 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Id {
    link: string
    flatrate: Flatrate39[]
    rent: Rent36[]
    buy: Buy37[]
  }
  
  export interface Flatrate39 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent36 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy37 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ie {
    link: string
    buy: Buy38[]
    rent: Rent37[]
    flatrate: Flatrate40[]
  }
  
  export interface Buy38 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent37 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate40 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Il {
    link: string
    buy: Buy39[]
    rent: Rent38[]
  }
  
  export interface Buy39 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent38 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface In {
    link: string
    flatrate: Flatrate41[]
    buy: Buy40[]
    rent: Rent39[]
  }
  
  export interface Flatrate41 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy40 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent39 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Iq {
    link: string
    flatrate: Flatrate42[]
  }
  
  export interface Flatrate42 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Is {
    link: string
    buy: Buy41[]
    flatrate: Flatrate43[]
    rent: Rent40[]
  }
  
  export interface Buy41 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate43 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent40 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface It {
    link: string
    buy: Buy42[]
    flatrate: Flatrate44[]
    rent: Rent41[]
  }
  
  export interface Buy42 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate44 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent41 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Jo {
    link: string
    flatrate: Flatrate45[]
  }
  
  export interface Flatrate45 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Jp {
    link: string
    flatrate: Flatrate46[]
    rent: Rent42[]
    buy: Buy43[]
  }
  
  export interface Flatrate46 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent42 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy43 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ke {
    link: string
    flatrate: Flatrate47[]
  }
  
  export interface Flatrate47 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Kr {
    link: string
    rent: Rent43[]
    flatrate: Flatrate48[]
    buy: Buy44[]
  }
  
  export interface Rent43 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate48 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy44 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Kw {
    link: string
    flatrate: Flatrate49[]
  }
  
  export interface Flatrate49 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Lb {
    link: string
    flatrate: Flatrate50[]
  }
  
  export interface Flatrate50 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Li {
    link: string
    flatrate: Flatrate51[]
  }
  
  export interface Flatrate51 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Lt {
    link: string
    rent: Rent44[]
    buy: Buy45[]
  }
  
  export interface Rent44 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy45 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Lu {
    link: string
    buy: Buy46[]
    rent: Rent45[]
    flatrate: Flatrate52[]
  }
  
  export interface Buy46 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent45 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate52 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Lv {
    link: string
    buy: Buy47[]
    rent: Rent46[]
  }
  
  export interface Buy47 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent46 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ly {
    link: string
    flatrate: Flatrate53[]
  }
  
  export interface Flatrate53 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ma {
    link: string
    flatrate: Flatrate54[]
  }
  
  export interface Flatrate54 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mc {
    link: string
    flatrate: Flatrate55[]
  }
  
  export interface Flatrate55 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Md {
    link: string
    flatrate: Flatrate56[]
  }
  
  export interface Flatrate56 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Me {
    link: string
    flatrate: Flatrate57[]
  }
  
  export interface Flatrate57 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mg {
    link: string
    flatrate: Flatrate58[]
  }
  
  export interface Flatrate58 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mk {
    link: string
    flatrate: Flatrate59[]
  }
  
  export interface Flatrate59 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ml {
    link: string
    rent: Rent47[]
    flatrate: Flatrate60[]
    buy: Buy48[]
  }
  
  export interface Rent47 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate60 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy48 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mu {
    link: string
    rent: Rent48[]
    flatrate: Flatrate61[]
    buy: Buy49[]
  }
  
  export interface Rent48 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate61 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy49 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mx {
    link: string
    buy: Buy50[]
    flatrate: Flatrate62[]
    rent: Rent49[]
  }
  
  export interface Buy50 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate62 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent49 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface My {
    link: string
    rent: Rent50[]
    flatrate: Flatrate63[]
    buy: Buy51[]
  }
  
  export interface Rent50 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate63 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy51 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Mz {
    link: string
    rent: Rent51[]
    flatrate: Flatrate64[]
    buy: Buy52[]
  }
  
  export interface Rent51 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate64 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy52 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ne {
    link: string
    flatrate: Flatrate65[]
  }
  
  export interface Flatrate65 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ng {
    link: string
    flatrate: Flatrate66[]
  }
  
  export interface Flatrate66 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ni {
    link: string
    flatrate: Flatrate67[]
    buy: Buy53[]
    rent: Rent52[]
  }
  
  export interface Flatrate67 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy53 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent52 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Nl {
    link: string
    buy: Buy54[]
    rent: Rent53[]
    flatrate: Flatrate68[]
  }
  
  export interface Buy54 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent53 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate68 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface No {
    link: string
    buy: Buy55[]
    flatrate: Flatrate69[]
    rent: Rent54[]
  }
  
  export interface Buy55 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate69 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent54 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Nz {
    link: string
    flatrate: Flatrate70[]
    buy: Buy56[]
    rent: Rent55[]
  }
  
  export interface Flatrate70 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy56 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent55 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Om {
    link: string
    flatrate: Flatrate71[]
  }
  
  export interface Flatrate71 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pa {
    link: string
    flatrate: Flatrate72[]
  }
  
  export interface Flatrate72 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pe {
    link: string
    flatrate: Flatrate73[]
    buy: Buy57[]
    rent: Rent56[]
  }
  
  export interface Flatrate73 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy57 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent56 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pf {
    link: string
    flatrate: Flatrate74[]
  }
  
  export interface Flatrate74 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pg {
    link: string
    rent: Rent57[]
    buy: Buy58[]
  }
  
  export interface Rent57 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy58 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ph {
    link: string
    flatrate: Flatrate75[]
    rent: Rent58[]
    buy: Buy59[]
  }
  
  export interface Flatrate75 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent58 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy59 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pl {
    link: string
    buy: Buy60[]
    flatrate: Flatrate76[]
    rent: Rent59[]
  }
  
  export interface Buy60 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate76 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent59 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ps {
    link: string
    flatrate: Flatrate77[]
  }
  
  export interface Flatrate77 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Pt {
    link: string
    rent: Rent60[]
    buy: Buy61[]
    flatrate: Flatrate78[]
  }
  
  export interface Rent60 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy61 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate78 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Py {
    link: string
    rent: Rent61[]
    flatrate: Flatrate79[]
    buy: Buy62[]
  }
  
  export interface Rent61 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate79 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy62 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Qa {
    link: string
    flatrate: Flatrate80[]
  }
  
  export interface Flatrate80 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ro {
    link: string
    flatrate: Flatrate81[]
    buy: Buy63[]
    rent: Rent62[]
  }
  
  export interface Flatrate81 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy63 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent62 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rs {
    link: string
    flatrate: Flatrate82[]
  }
  
  export interface Flatrate82 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ru {
    link: string
    flatrate: Flatrate83[]
  }
  
  export interface Flatrate83 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sa {
    link: string
    flatrate: Flatrate84[]
    rent: Rent63[]
    buy: Buy64[]
  }
  
  export interface Flatrate84 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent63 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy64 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sc {
    link: string
    flatrate: Flatrate85[]
  }
  
  export interface Flatrate85 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Se {
    link: string
    flatrate: Flatrate86[]
    rent: Rent64[]
    buy: Buy65[]
  }
  
  export interface Flatrate86 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent64 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy65 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sg {
    link: string
    flatrate: Flatrate87[]
    rent: Rent65[]
    buy: Buy66[]
  }
  
  export interface Flatrate87 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent65 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy66 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Si {
    link: string
    flatrate: Flatrate88[]
  }
  
  export interface Flatrate88 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sk {
    link: string
    rent: Rent66[]
    flatrate: Flatrate89[]
    buy: Buy67[]
  }
  
  export interface Rent66 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate89 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy67 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sm {
    link: string
    flatrate: Flatrate90[]
  }
  
  export interface Flatrate90 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sn {
    link: string
    flatrate: Flatrate91[]
  }
  
  export interface Flatrate91 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Sv {
    link: string
    flatrate: Flatrate92[]
  }
  
  export interface Flatrate92 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Td {
    link: string
    flatrate: Flatrate93[]
  }
  
  export interface Flatrate93 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Th {
    link: string
    flatrate: Flatrate94[]
    buy: Buy68[]
    rent: Rent67[]
  }
  
  export interface Flatrate94 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy68 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent67 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tn {
    link: string
    flatrate: Flatrate95[]
  }
  
  export interface Flatrate95 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tr {
    link: string
    buy: Buy69[]
    rent: Rent68[]
    flatrate: Flatrate96[]
  }
  
  export interface Buy69 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent68 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate96 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tw {
    link: string
    rent: Rent69[]
    flatrate: Flatrate97[]
    buy: Buy70[]
  }
  
  export interface Rent69 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate97 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy70 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Tz {
    link: string
    buy: Buy71[]
    rent: Rent70[]
    flatrate: Flatrate98[]
  }
  
  export interface Buy71 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent70 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate98 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ua {
    link: string
    buy: Buy72[]
    rent: Rent71[]
  }
  
  export interface Buy72 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent71 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ug {
    link: string
    rent: Rent72[]
    flatrate: Flatrate99[]
    buy: Buy73[]
  }
  
  export interface Rent72 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate99 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy73 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Us {
    link: string
    flatrate: Flatrate100[]
    rent: Rent73[]
    buy: Buy74[]
  }
  
  export interface Flatrate100 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent73 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy74 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Uy {
    link: string
    flatrate: Flatrate101[]
  }
  
  export interface Flatrate101 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ve {
    link: string
    rent: Rent74[]
    buy: Buy75[]
    flatrate: Flatrate102[]
  }
  
  export interface Rent74 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy75 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate102 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ye {
    link: string
    flatrate: Flatrate103[]
  }
  
  export interface Flatrate103 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Za {
    link: string
    rent: Rent75[]
    buy: Buy76[]
    flatrate: Flatrate104[]
  }
  
  export interface Rent75 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy76 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Flatrate104 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Zm {
    link: string
    flatrate: Flatrate105[]
  }
  
  export interface Flatrate105 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Zw {
    link: string
    flatrate: Flatrate106[]
    buy: Buy77[]
  }
  
  export interface Flatrate106 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Buy77 {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  