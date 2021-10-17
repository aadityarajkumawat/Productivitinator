import { motion } from 'framer-motion'
import React, { Fragment, useState } from 'react'
import { useMutation, useQuery } from 'urql'
import { EditCollegeTask } from '../../components/EditCollegeTask/EditCollegeTask'
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
    PositionModalCenter,
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
    const [editTaskModalOpen, setEditTaskModalOpen] = useState<boolean>(false)
    const [, deleteTaskFn] = useMutation<any, DeleteTaskInput>(DELETE_TASK)
    const [, markTask] = useMutation<any, MarkTaskInput>(MARK_TASK)
    let daysLeft = getNumberOfDays(buildDateString(new Date()), lastDate)

    function openDeleteModal(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        setDeleteModalOpen(true)
    }

    function openEditTaskModal(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        setEditTaskModalOpen(true)
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
            onDoubleClick={openEditTaskModal}
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
                    <span className='d-flex'>
                        <label>Submission date:</label>
                        <p>{lastDate}</p>
                    </span>
                </div>
                <div className='days-left'>{taskStatus(daysLeft)}</div>
            </div>
            <Modal
                open={editTaskModalOpen}
                setClose={() => setEditTaskModalOpen(false)}
            >
                <PositionModalCenter>
                    <EditCollegeTask
                        taskId={taskId}
                        subjectId={subjectId}
                        closeModal={() => setEditTaskModalOpen(false)}
                    />
                </PositionModalCenter>
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
                <PositionModalCenter id='pos'>
                    <AddCollegeTask closeModal={closeModal} subjectId={id} />
                </PositionModalCenter>
            </Modal>
            <OpenUniversalSearch {...search} />
        </CollegeTasksContainer>
    )
}
