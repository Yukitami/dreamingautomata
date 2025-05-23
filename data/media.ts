export type MediaType = 'anime' | 'book' | 'movie' | 'serie' | 'game' | 'album'
export type MediaState = 'done' | 'doing' | 'todo'

export interface MediaRecord {
  name: string
  creator?: string
  state?: MediaState
  date?: string
  note?: string
  lang?: string
}

export const anime: MediaRecord[] = [
  {
    name: '鋼の錬金術師 FULLMETAL ALCHEMIST',
    creator: '荒川弘',
  },
  {
    name: 'ノーゲーム・ノーライフ No Game No Life',
    creator: '榎宮祐',
  },
  {
    name: 'Arcane',
    creator: 'Riot Games',
  },
  {
    name: 'ダンダダン Dan Da Dan',
    creator: '龍幸伸',
  },
  {
    name: 'チェンソーマン Chainsaw Man',
    creator: '藤本タツキ',
  },
  {
    name: 'ソードアート・オンライン Sword Art Online',
    creator: '川原礫',
  },
  {
    name: 'ワンパンマン One-Punch Man',
    creator: 'ONE',
  },
]

export const book: MediaRecord[] = [
  {
    name: 'Die with Zero',
    creator: 'Bill Perkins',
  },
]

export const movie: MediaRecord[] = [
  {
    name: 'Spider-Man: Across the Spider-Verse',
    creator: 'Joaquim Santos, Kemp Powers, Justin Thompson',
  },
  {
    name: 'Everything Everywhere All at Once',
    creator: 'The Daniels',
  },
  {
    name: 'The Truman Show',
    creator: 'Peter Weir',
  },
]

export const serie: MediaRecord[] = [
  {
    name: 'Wednesday',
  },
]

export const game: MediaRecord[] = [
  {
    name: 'Baldur\'s Gate 3',
    creator: 'Larian Studios',
  },
]

export const album = [
  {
    name: '陀飛輪',
    creator: '陳奕迅',
    lang: 'zh-Hant',
  },
]

export const media: Record<MediaType, MediaRecord[]> = {
  anime,
  serie,
  movie,
  game,
  album,
  book,
}
