import styled from 'styled-components'

export const AddSubjectContainer = styled.div`
    width: calc(100% - 300px);
    display: flex;
    justify-content: center;
    align-items: center;

    .form-container {
        width: 600px;
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
