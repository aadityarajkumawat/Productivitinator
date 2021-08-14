export interface User {
    userId: number
    name: string
    username: string
    password: string
    createdAt: string
}

export interface GetUserResponse {
    user: Omit<User, 'password' | 'createdAt'>
    error: string
}

export interface GetUserQueryResponse {
    getUser: GetUserResponse
}
