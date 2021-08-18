import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation, useQuery } from 'urql'
import { DeleteModal } from '../../components/DeleteModal/DeleteModal'
import { Modal } from '../../components/Modal/Modal'
import { OpenUniversalSearch } from '../../components/OpenUniversalSearch/OpenUniversalSearch'
import { DELETE_TASK } from '../../graphql/deleteTask'
import { GET_TASKS } from '../../graphql/getTasks'
import { CollegeTask, GetTasksQueryResponse } from '../../graphql/types'
import { getNumberOfDays } from '../../helpers/formatDate'
import { ifDataFound } from '../../helpers/ifDataFound'
import { useUniversalSearch } from '../../hooks/useUniversalSearch'
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
}: CollegeTask) {
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [, deleteTaskFn] = useMutation<
        any,
        { taskId: number; subjectId: number }
    >(DELETE_TASK)

    function openDeleteModal(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        setDeleteModalOpen(true)
    }

    async function deleteTask() {
        await deleteTaskFn({ taskId, subjectId })
    }

    return (
        <CollegeTaskItemContainer onDoubleClick={openDeleteModal}>
            <div className='task-name d-flex'>
                <p>{taskName}</p>
                <input
                    type='checkbox'
                    name='completed'
                    onDoubleClick={(e) => {
                        e.stopPropagation()
                    }}
                />
            </div>
            <div className='assigned-submission d-flex'>
                <div className='wrap'>
                    <span>Date assigned: {timeAssigned}</span>
                    <span>Submission date: {lastDate}</span>
                </div>
                {completed && (
                    <div className='days-left'>
                        Days left: {getNumberOfDays(timeAssigned, lastDate)}
                    </div>
                )}
            </div>
            <div className='task-comment d-flex'>
                {comment && <p>{comment}</p>}
                {completed ? (
                    <p>Completed</p>
                ) : (
                    <p>Days left: {getNumberOfDays(timeAssigned, lastDate)}</p>
                )}
            </div>
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

export function CollegeTasks() {
    let router = useHistory()
    let search = useUniversalSearch()
    let subjectId = parseInt(router.location.pathname.substr(15, 2))
    const [addTaskModalOpen, setAddTaskModalOpen] = useState<boolean>(false)
    const [{ data, fetching }] = useQuery<
        GetTasksQueryResponse,
        { subjectId: number }
    >({
        query: GET_TASKS,
        variables: { subjectId },
    })
    return (
        <CollegeTasksContainer>
            <div className='heading'>
                {ifDataFound(data, fetching)
                    ? data!.getSubject.subject.subjectName
                    : ''}
            </div>
            <div
                className='listOf'
                onClick={() => router.push(`/add-college-task/${subjectId}`)}
            >
                Tasks
            </div>
            <div
                className='tasks-container'
                onDoubleClick={(e) => setAddTaskModalOpen(true)}
            >
                {ifDataFound(data, fetching) ? (
                    <Fragment>
                        {data!.getTasks.tasks.length > 0 ? (
                            data!.getTasks.tasks.map((task, idx) => (
                                <CollegeTaskItem key={idx} {...task} />
                            ))
                        ) : (
                            <div className='faded-text'>No tasks scheduled</div>
                        )}
                    </Fragment>
                ) : (
                    <div></div>
                )}
            </div>
            <Modal
                open={addTaskModalOpen}
                setClose={() => setAddTaskModalOpen(false)}
            >
                <PositionDeleteModal id='pos'>
                    <AddCollegeTask />
                </PositionDeleteModal>
            </Modal>
            <OpenUniversalSearch {...search} />
        </CollegeTasksContainer>
    )
}
