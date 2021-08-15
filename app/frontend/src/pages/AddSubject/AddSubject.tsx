import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'urql'
import { OpenUniversalSearch } from '../../components/OpenUniversalSearch/OpenUniversalSearch'
import { ADD_SUBJECT } from '../../graphql/addSubject'
import { useUniversalSearch } from '../../hooks/useUniversalSearch'
import { AddSubjectInput } from '../../types'
import { AddSubjectContainer } from './AddSubject.styles'

export function AddSubject() {
    let router = useHistory()
    const [, addSubject] = useMutation<any, AddSubjectInput>(ADD_SUBJECT)
    const search = useUniversalSearch()
    const [addSubjectForm, setAddSubjectForm] = useState<AddSubjectInput>({
        subjectName: '',
        instructor: '',
        credits: 0,
        semester: 0,
    })
    const { subjectName, instructor, credits, semester } = addSubjectForm

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value
        let name = e.target.name
        setAddSubjectForm((form) => ({ ...form, [name]: value }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await addSubject({
            ...addSubjectForm,
            credits: parseInt(addSubjectForm.credits.toString()),
            semester: parseInt(addSubjectForm.semester.toString()),
        })
        router.push('/college')
    }

    return (
        <AddSubjectContainer>
            <div className='form-container'>
                <h2>Add new subject</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-col'>
                        <label htmlFor='subjectName'>Subject Name</label>
                        <input
                            type='text'
                            name='subjectName'
                            value={subjectName}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className='input-col'>
                        <label htmlFor='instructor'>Instructor</label>
                        <input
                            type='text'
                            name='instructor'
                            value={instructor}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className='two-column d-flex'>
                        <div className='input-col mr-2'>
                            <label htmlFor='credits'>Credits</label>
                            <input
                                type='text'
                                name='credits'
                                value={credits}
                                onChange={handleChange}
                                autoComplete='off'
                            />
                        </div>
                        <div className='input-col'>
                            <label htmlFor='semester'>Semester</label>
                            <input
                                type='text'
                                name='semester'
                                value={semester}
                                onChange={handleChange}
                                autoComplete='off'
                            />
                        </div>
                    </div>

                    <div className='container'>
                        <button type='submit'>Add subject</button>
                    </div>
                </form>
            </div>
            <OpenUniversalSearch {...search} />
        </AddSubjectContainer>
    )
}
