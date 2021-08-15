import styled from 'styled-components'

export const CollegeContainer = styled.div`
    width: calc(100% - 300px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 10px;

    .heading {
        font-size: 40px;
        .date {
            font-size: 25px;
            margin: 0 10px;
        }
    }

    .listOf {
        margin: 30px 0;
        font-size: 30px;
    }
`

export const PositionUSBar = styled.div`
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translateX(-50%);
`

export const CollegeTasksContainer = styled.section`
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 10px;

    .heading {
        font-size: 40px;
    }

    .listOf {
        margin: 30px 0;
        font-size: 30px;
    }

    .tasks-container {
        background: #484848;
        border: 1px solid #6f6f6f;
        box-sizing: border-box;
        box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding: 20px;
        width: 700px;
        height: 670px;
        text-align: center;
    }

    .faded-text {
        opacity: 0.6;
    }
`

export const CollegeTaskItemContainer = styled.div`
    width: 100%;
    padding: 8px 15px;
    background: #5c5c5c;
    border: 1px solid #737373;
    box-sizing: border-box;
    box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    margin-bottom: 20px;

    .task-name {
        font-size: 17px;
        justify-content: space-between;
        align-items: center;

        input {
            width: 15px;
            height: 15px;
        }
    }

    .assigned-submission {
        justify-content: space-between;
        font-size: 15px;
        margin: 5px 0;
        span {
            margin-right: 20px;
        }
    }

    .task-comment {
        font-size: 15px;
        justify-content: space-between;
        align-items: center;
    }
`
