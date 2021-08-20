import {
    CreateSemesterInput,
    CreateSemesterResponse,
    ResolverContext,
} from 'src/types'

export async function createSemester(
    _: any,
    args: CreateSemesterInput,
    { prisma }: ResolverContext,
): Promise<CreateSemesterResponse> {
    // if (!request.session.userId)
    //     return { semester: null, error: 'You are not authenticated' }

    try {
        let { semester, semesterEnd } = args
        let newSemester = await prisma.semester.create({
            data: {
                semester,
                semesterEnd: semesterEnd.toDate(),
                user: {
                    connect: {
                        userId: 1,
                    },
                },
            },
        })
        if (!newSemester)
            return { semester: null, error: 'Error creating semester' }
        return {
            semester: newSemester,
            error: null,
        }
    } catch (e) {
        console.log(e.message)
        return { semester: null, error: e.message }
    }
}
