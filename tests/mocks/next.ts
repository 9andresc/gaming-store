import { NextRouter } from 'next/router'

async function mockNextUseRouter(props: NextRouter): Promise<void> {
  const nextRouter = await import('next/router')
  const useRouter = jest.spyOn(nextRouter, 'useRouter')

  useRouter.mockImplementationOnce(() => props)
}

export { mockNextUseRouter }
