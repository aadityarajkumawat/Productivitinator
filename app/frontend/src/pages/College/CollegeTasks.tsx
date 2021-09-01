import { motion } from 'framer-motion'
import React, { Fragment, useState } from 'react'
import { useMutation, useQuery } from 'urql'
import { DeleteModal } from '../../components/DeleteModal/DeleteModal'
import { Modal } from '../../components/Modal/Modal'
import { OpenUniversalSearch } from '../../components/OpenUniversalSearch/OpenUniversalSearch'
import { DELETE_TASK } from '../../graphql/deleteTask'
import { GET_TASKS } from '../../graphql/getTasks'
import { MARK_TASK } from '../../graphql/markTask'
import { CollegeTask, GetTasksQueryResponse } from '../../graphql/types'
import { buildDateString } from '../../helpers/buildDateString'
import { getNumberOfDays } from '../../helpers/formatDate'
import { ifDataFound } from '../../helpers/ifDataFound'
import { useUniversalSearch } from '../../hooks/useUniversalSearch'
import { DeleteTaskInput, MarkTaskInput } from '../../types'
import { AddCollegeTask } from './AddCollegeTask'
import {
    CollegeTaskItemContainer,
    CollegeTasksContainer,
    PositionDeleteModal,
} from './College.styles'

function CollegeTaskItem({
    comment,
    completed,
    lastDate,
    taskName,
    timeAssigned,
    taskId,
    subjectId,
    index,
}: CollegeTask & { index: number }) {
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [, deleteTaskFn] = useMutation<any, DeleteTaskInput>(DELETE_TASK)
    const [, markTask] = useMutation<any, MarkTaskInput>(MARK_TASK)
    let daysLeft = getNumberOfDays(buildDateString(new Date()), lastDate)

    function openDeleteModal(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        setDeleteModalOpen(true)
    }

    async function deleteTask() {
        await deleteTaskFn({ taskId, subjectId })
    }

    async function toggleChecked() {
        await markTask({ taskId })
    }

    function taskStatus(days: number) {
        let status = ''
        if (completed) {
            status = 'Done!'
        } else if (days === 0) {
            status = 'Last Day'
        } else if (days === 1) {
            status = '1 day left'
        } else if (days > 1) {
            status = `${days} days left`
        }
        return status
    }

    return (
        <CollegeTaskItemContainer
            onDoubleClick={openDeleteModal}
            initial={{ y: 10 * (index + 1) }}
            animate={{ y: -0 * (index + 1) }}
            transition={{ duration: 0.3 }}
        >
            <div className='task-name d-flex'>
                <div>
                    <p>{taskName}</p>
                </div>
                <input
                    type='checkbox'
                    name='completed'
                    onDoubleClick={(e) => {
                        e.stopPropagation()
                    }}
                    onChange={toggleChecked}
                    checked={completed}
                />
            </div>
            <div className='assigned-submission d-flex'>
                <div className='wrap'>
                    {/* <span>Date assigned: {timeAssigned}</span> */}
                    <span className='d-flex'>
                        <label>Submission date:</label>
                        <p>{lastDate}</p>
                    </span>
                </div>
                <div className='days-left'>{taskStatus(daysLeft)}</div>
            </div>
            {/* <div className='task-comment d-flex'>
                {comment && <p>{comment}</p>}
                {completed ? (
                    <p>Completed</p>
                ) : (
                    <p>
                        Days left:{' '}
                        {getNumberOfDays(buildDateString(new Date()), lastDate)}
                    </p>
                )}
            </div> */}
            <Modal
                open={deleteModalOpen}
                setClose={() => setDeleteModalOpen(false)}
            >
                <PositionDeleteModal>
                    <DeleteModal
                        message='Are you sure you want to delete task?'
                        deleteTask={deleteTask}
                    />
                </PositionDeleteModal>
            </Modal>
        </CollegeTaskItemContainer>
    )
}

interface CollegeTasksProps {
    id: number
}

export function CollegeTasks({ id }: CollegeTasksProps) {
    let search = useUniversalSearch()
    const [addTaskModalOpen, setAddTaskModalOpen] = useState<boolean>(false)
    const [{ data, fetching }] = useQuery<
        GetTasksQueryResponse,
        { subjectId: number }
    >({
        query: GET_TASKS,
        variables: { subjectId: id },
    })

    function closeModal() {
        setAddTaskModalOpen(false)
    }

    function openModal() {
        setAddTaskModalOpen(true)
    }

    return (
        <CollegeTasksContainer>
            <motion.div
                layout
                className='tasks-container'
                onDoubleClick={openModal}
            >
                {ifDataFound(data, fetching) ? (
                    <Fragment>
                        {data!.getTasks.tasks.length > 0 ? (
                            data!.getTasks.tasks.map((task, idx) => (
                                <CollegeTaskItem
                                    key={idx}
                                    index={idx}
                                    {...task}
                                />
                            ))
                        ) : (
                            <div className='faded-text'>No tasks scheduled</div>
                        )}
                    </Fragment>
                ) : (
                    <div></div>
                )}
            </motion.div>
            <Modal open={addTaskModalOpen} setClose={closeModal}>
                <PositionDeleteModal id='pos'>
                    <AddCollegeTask closeModal={closeModal} subjectId={id} />
                </PositionDeleteModal>
            </Modal>
            <OpenUniversalSearch {...search} />
        </CollegeTasksContainer>
    )
}
