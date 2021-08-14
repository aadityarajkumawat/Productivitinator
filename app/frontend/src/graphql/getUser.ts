import { gql } from 'urql'

export const GET_USER = gql`
    query GetUser {
        getUser {
            user {
                userId
                username
                name
            }
            error
        }
    }
`
