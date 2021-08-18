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
    user-select: none;

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

export const AddCollegeTaskContainer = styled.section`
    width: 100%;
    justify-content: center;
    display: flex;
    height: fit-content;
    .form-container {
        width: 700px;
        padding: 15px;
        background-color: #484848;
        border: 1px solid #6f6f6f;
        border-radius: 3px;
        box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.25);

        h2 {
            margin-bottom: 20px;
        }

        form {
            .input-col {
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;

                .date-container {
                    margin: 15px 0;
                    display: flex;
                    flex-direction: column;

                    div {
                        width: 300px;
                        border-radius: 3px;
                    }
                }

                label {
                    margin-bottom: 5px;
                }

                input {
                    background: #6a6a6a;
                    border: 1px solid #838383;
                    box-sizing: border-box;
                    border-radius: 3px;
                    padding: 5px 15px;
                    font-size: 16px;
                    transition: border-color 0.3s ease-in;

                    &:focus {
                        outline: none;
                        border-color: #c2c2c2;
                        transition: border-color 0.3s ease-in;
                    }
                }
            }
        }

        .container {
            display: flex;
            justify-content: flex-end;
            margin-top: 30px;

            button {
                background: linear-gradient(180deg, #2797ff 0%, #0085ff 100%);
                border-radius: 3px;
                padding: 5px 10px;
                cursor: pointer;
            }
        }
    }
`

export const PositionDeleteModal = styled.div`
    position: absolute;
    left: calc(50% + 150px);
    top: 50%;
    transform: translate(-50%, -50%);
`
