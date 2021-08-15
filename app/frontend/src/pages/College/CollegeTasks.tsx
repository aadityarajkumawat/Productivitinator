import React from 'react'
import { OpenUniversalSearch } from '../../components/OpenUniversalSearch/OpenUniversalSearch'
import { useUniversalSearch } from '../../hooks/useUniversalSearch'
import {
    CollegeTaskItemContainer,
    CollegeTasksContainer,
} from './College.styles'

function CollegeTaskItem() {
    return (
        <CollegeTaskItemContainer>
            <div className='task-name d-flex'>
                <p>Data Structure Assignment - 1</p>
                <input type='checkbox' name='completed' />
            </div>
            <div className='assigned-submission d-flex'>
                <div className='wrap'>
                    <span>Date assigned: 20/09/2021</span>
                    <span>Submission date: 28/09/2021</span>
                </div>
                <div className='days-left'>15 days left</div>
            </div>
            <div className='task-comment d-flex'>
                <p>
                    Here we can put some comment if required, that we might
                    forget
                </p>
                <p>Completed</p>
            </div>
        </CollegeTaskItemContainer>
    )
}

export function CollegeTasks() {
    let search = useUniversalSearch()
    return (
        <CollegeTasksContainer>
            <div className='heading'>Data Structures and Algorithms</div>
            <div className='listOf'>Tasks</div>
            <div className='tasks-container'>
                <CollegeTaskItem />
                <CollegeTaskItem />
                <CollegeTaskItem />
                <CollegeTaskItem />
                <CollegeTaskItem />
                <CollegeTaskItem />
            </div>
            <OpenUniversalSearch {...search} />
        </CollegeTasksContainer>
    )
}
