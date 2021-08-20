import { AddSubjectInput, AddSubjectResponse, ResolverContext } from 'src/types'

export async function addSubject(
    _: any,
    args: AddSubjectInput,
    { prisma }: ResolverContext,
): Promise<AddSubjectResponse> {
    // if (!request.session.userId)
    //     return { subject: null, error: 'You are not authenticated' }

    try {
        let subject = await prisma.subject.create({
            data: {
                ...args,
                user: {
                    connect: {
                        userId: 1,
                    },
                },
            },
        })
        if (!subject) return { subject: null, error: 'Error adding subject' }
        return { subject: subject, error: null }
    } catch (e) {
        console.log(e.message)
        return { subject: null, error: e.message }
    }
}
