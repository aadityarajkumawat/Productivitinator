import { createClient, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'

let client = createClient({
    url: 'http://localhost:4000',
    fetchOptions: { credentials: 'include' },
    exchanges: [devtoolsExchange, ...defaultExchanges],
})
export default client
