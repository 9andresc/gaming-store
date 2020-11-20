import { NextApiRequest, NextApiResponse } from 'next'

import IGame from '@server/db/models/game'
import gamesService from '@server/services/games'
import { sendError } from '@utils/errors'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    let { page, pageSize } = (req.query as unknown) as {
      page?: number
      pageSize?: number
    }

    if (typeof page === 'undefined' || !page) {
      page = 1
    }
    if (typeof pageSize === 'undefined' || !pageSize) {
      pageSize = 12
    }

    let games: Array<IGame>
    let hasNextPage: boolean
    try {
      ;({ games, hasNextPage } = await gamesService.getGames({
        page,
        pageSize
      }))
    } catch (error) {
      sendError({ error, res })
      return
    }

    const nextPage = hasNextPage
      ? `api/games?page=${Number(page) + 1}&pageSize=${pageSize}`
      : null

    res.status(200)
    res.send({ nextPage, results: games })
  }

  return
}
