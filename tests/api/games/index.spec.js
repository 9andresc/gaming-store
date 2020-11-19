import rawgServer from '@tests/mocks/rawg'

import getGamesTests from './getGames'

describe('Games API', () => {
  beforeAll(() => rawgServer.listen())
  afterAll(() => rawgServer.close())

  describe('Get Games', () => {
    it('Should return the default games list', async () => {
      await getGamesTests.default()
    })

    it('Should return the paginated games list', async () => {
      await getGamesTests.paginated()
    })
  })
})
