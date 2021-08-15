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

export interface Semester {
    metaId: number
    userId: number
    semester: number
    semesterStart: Date
    semesterEnd: Date
}

export interface GetSemesterResponse {
    semester: Semester
    error: string
}

export interface GetSemesterQueryResponse {
    getSemester: GetSemesterResponse
}
