import axios from 'axios'

import IGame from '@server/db/models/game'
import { parsePlatform } from '@utils/games'

type params = {
  page?: number
  pageSize?: number
}

type result = {
  games: Array<IGame>
  hasNextPage: boolean
}

async function getGames({ page, pageSize }: params): Promise<result> {
  const params = { page, page_size: pageSize }

  const response = await axios.get(`${process.env.RAWG_URL}/games`, { params })

  const games: Array<IGame> = response.data.results.map((result) => {
    let platforms = result.parent_platforms
      .map((parentPlatform) => parsePlatform(parentPlatform.platform.slug))
      .sort()
    platforms = [...Array.from(new Set(platforms))]

    return {
      id: result.id,
      image: result.background_image,
      rating: result.rating,
      releaseDate: result.released,
      platforms,
      title: result.name
    }
  })
  const hasNextPage = Boolean(response.data.next)

  return { games, hasNextPage }
}

export default getGames
