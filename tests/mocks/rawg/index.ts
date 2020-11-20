import { rest } from 'msw'
import { setupServer } from 'msw/node'

import data from './data.json'

const server = setupServer(
  rest.get('https://api.rawg.io/api/games', (req, res, ctx) => {
    const page = req.url.searchParams.get('page')

    if (!page || page === '1') {
      return res(ctx.json(data.firstPage))
    }

    return res(ctx.json(data.secondPage))
  })
)

export default server
