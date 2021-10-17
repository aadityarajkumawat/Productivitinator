import { motion } from 'framer-motion'
import { useState } from 'react'
import DatePicker from 'react-date-picker'
import { useMutation, useQuery } from 'urql'
import { ADD_COLLEGE_TASK } from '../../graphql/addCollegeTask'
import { GET_TASK } from '../../graphql/getTask'
import { GetCollegeTaskQueryResponse } from '../../graphql/types'
import { buildDateString } from '../../helpers/buildDateString'
import { EditCollegeTaskContainer } from './EditCollegeTask.styles'

interface EditCollegeTaskProps {
    taskId: number
    subjectId: number
    closeModal: () => void
}

interface AddTaskInput {
    subjectId: number
    taskName: string
    timeAssigned: Date | string
    lastDate: Date | string
}

export function EditCollegeTask({
    taskId,
    subjectId,
    closeModal,
}: EditCollegeTaskProps) {
    const [{ data, fetching }] = useQuery<
        GetCollegeTaskQueryResponse,
        { taskId: number }
    >({
        query: GET_TASK,
        variables: { taskId },
    })

    const [addTaskData, setAddTaskData] = useState<AddTaskInput>({
        subjectId,
        taskName: '',
        lastDate: new Date(),
        timeAssigned: new Date(),
    })
    const { taskName, lastDate, timeAssigned } = addTaskData
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
        await addTask(params)
        closeModal()
    }

    return (
        <EditCollegeTaskContainer
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className='form-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0 }}
            >
                <h2>Edit Task</h2>
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
                        <div className='mr2 date-container'>
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
            </motion.div>
        </EditCollegeTaskContainer>
    )
}
