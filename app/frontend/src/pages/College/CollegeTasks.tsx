import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'urql'
import { OpenUniversalSearch } from '../../components/OpenUniversalSearch/OpenUniversalSearch'
import { GET_TASKS } from '../../graphql/getTasks'
import { CollegeTask, GetTasksQueryResponse } from '../../graphql/types'
import { ifDataFound } from '../../helpers/ifDataFound'
import { useEventListener } from '../../hooks/useEventListener'
import { useUniversalSearch } from '../../hooks/useUniversalSearch'
import {
    CollegeTaskItemContainer,
    CollegeTasksContainer,
} from './College.styles'

function CollegeTaskItem({
    comment,
    completed,
    lastDate,
    taskName,
    timeAssigned,
}: CollegeTask) {
    return (
        <CollegeTaskItemContainer>
            <div className='task-name d-flex'>
                <p>{taskName}</p>
                <input type='checkbox' name='completed' />
            </div>
            <div className='assigned-submission d-flex'>
                <div className='wrap'>
                    <span>Date assigned: {timeAssigned}</span>
                    <span>Submission date: {lastDate}</span>
                </div>
                {completed && <div className='days-left'>15 days left</div>}
            </div>
            <div className='task-comment d-flex'>
                {comment && <p>{comment}</p>}
                {completed ? <p>Completed</p> : <p>15 days left</p>}
            </div>
        </CollegeTaskItemContainer>
    )
}

export function CollegeTasks() {
    let search = useUniversalSearch()
    let router = useHistory()
    let subjectId = parseInt(router.location.pathname.substr(15, 1))
    const [{ data, fetching }] = useQuery<
        GetTasksQueryResponse,
        { subjectId: number }
    >({
        query: GET_TASKS,
        variables: { subjectId },
    })
    useEventListener('keydown', (evt) => {
        evt.preventDefault()
        if (evt.key === 'Backspace') {
            router.goBack()
        }
    })
    return (
        <CollegeTasksContainer>
            <div className='heading'>
                {ifDataFound(data, fetching)
                    ? data!.getSubject.subject.subjectName
                    : ''}
            </div>
            <div className='listOf'>Tasks</div>
            <div className='tasks-container'>
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
            <OpenUniversalSearch {...search} />
        </CollegeTasksContainer>
    )
}
