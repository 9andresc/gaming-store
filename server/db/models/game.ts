interface IGame {
  id: number
  image: string
  rating: number
  releaseDate: Date
  platforms: Array<
    | 'neo-geo'
    | '3do'
    | 'android'
    | 'apple'
    | 'atari'
    | 'commodore'
    | 'linux'
    | 'nintendo'
    | 'pc'
    | 'playstation'
    | 'sega'
    | 'xbox'
    | 'web'
  >
  title: string
}

export default IGame
