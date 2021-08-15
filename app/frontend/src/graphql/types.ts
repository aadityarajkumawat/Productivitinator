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

export interface Subject {
    userId: number
    subjectId: number
    subjectName: string
    instructor: string
    credits: number
    semester: number
}

export interface GetSubjectsResponse {
    subjects: Array<Subject>
    error: string
}

export interface GetCollegeQueryResponse {
    getSemester: GetSemesterResponse
    getSubjects: GetSubjectsResponse
}

export interface CollegeTask {
    taskId: number
    subjectId: number
    taskName: string
    timeAssigned: string
    lastDate: string
    completed: boolean
    completedAt: string
    comment: string
}

export interface GetTasksQueryResponse {
    getTasks: { tasks: Array<CollegeTask>; error: string }
    getSubject: { subject: Subject; error: string }
}

export interface AddCollegeTaskMutationResponse {
    addTask: { task: CollegeTask; error: string }
}
