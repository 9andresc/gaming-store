import { rest } from 'msw'
import { setupServer } from 'msw/node'

import data from './data.json'

const server = setupServer(
  rest.get(
    'https://api.rawg.io/api/games?page=1&page_size=12',
    (_req, res, ctx) => {
      return res(ctx.json(data.firstPage))
    }
  ),
  rest.get(
    'https://api.rawg.io/api/games?page=2&page_size=12',
    (_req, res, ctx) => {
      return res(ctx.json(data.secondPage))
    }
  )
)

export default server
