import { config } from 'dotenv'

if (!process.env.CI) {
  config({ path: '.env.local' })
}
