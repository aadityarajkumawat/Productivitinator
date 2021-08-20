import { gql } from 'urql'

export const LOGIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            user {
                userId
                username
                name
            }
            error
        }
    }
`
