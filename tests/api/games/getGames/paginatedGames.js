import { createMocks } from 'node-mocks-http'

import getGames from '@pages/api/games'

import data from './data.json'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function paginatedGames() {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      page: 2
    }
  })

  await getGames(req, res)

  expect(res._getStatusCode()).toBe(200)
  expect(JSON.stringify(res._getData())).toBe(JSON.stringify(data.secondPage))
}

export default paginatedGames
