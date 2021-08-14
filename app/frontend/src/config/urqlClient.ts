import { createClient } from 'urql'

let client = createClient({ url: 'http://localhost:4000' })
export default client
