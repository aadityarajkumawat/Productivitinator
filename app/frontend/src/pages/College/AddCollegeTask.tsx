import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'urql'
import { ADD_COLLEGE_TASK } from '../../graphql/addCollegeTask'
import { AddCollegeTaskContainer } from './College.styles'
import DatePicker from 'react-date-picker'
import { buildDateString } from '../../helpers/buildDateString'

interface AddTaskInput {
    subjectId: number
    taskName: string
    timeAssigned: Date | string
    lastDate: Date | string
}

export function AddCollegeTask() {
    let router = useHistory()
    let subjectIdParsed = parseInt(router.location.pathname.substr(15, 2))
    const [addTaskData, setAddTaskData] = useState<AddTaskInput>({
        subjectId: subjectIdParsed,
        taskName: '',
        lastDate: new Date(),
        timeAssigned: new Date(),
    })
    const { subjectId, taskName, lastDate, timeAssigned } = addTaskData
    const [, addTask] = useMutation<any, AddTaskInput>(ADD_COLLEGE_TASK)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAddTaskData((data) => ({
            ...data,
            taskName: (e as React.ChangeEvent<HTMLInputElement>).target.value,
        }))
    }

    function handleTimeAssigned(date: Date) {
        setAddTaskData((data) => ({ ...data, timeAssigned: date }))
    }

    function handleLastDate(date: Date) {
        setAddTaskData((data) => ({ ...data, lastDate: date }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let params = {
            taskName,
            subjectId,
            lastDate: buildDateString(lastDate as Date),
            timeAssigned: buildDateString(timeAssigned as Date),
        }
        let s = await addTask(params)
        // console.log(s, params)
    }

    return (
        <AddCollegeTaskContainer>
            <div className='form-container'>
                <h2>Add college task</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-col'>
                        <label htmlFor='taskname'>Task Name</label>
                        <input
                            type='text'
                            name='taskname'
                            value={taskName}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                        <div className='mr-2 date-container'>
                            <div className='input-col mr-2'>
                                <label htmlFor='timeassigned'>
                                    Date assigned
                                </label>
                                <DatePicker
                                    onChange={handleTimeAssigned}
                                    value={addTaskData.timeAssigned as Date}
                                    name='timeassigned'
                                />
                            </div>
                            <div className='input-col mr-2'>
                                <label htmlFor='timeassigned'>
                                    Last date to submit
                                </label>
                                <DatePicker
                                    onChange={handleLastDate}
                                    value={addTaskData.lastDate as Date}
                                    name='lastdate'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <button type='submit'>Add task</button>
                    </div>
                </form>
            </div>
        </AddCollegeTaskContainer>
    )
}
