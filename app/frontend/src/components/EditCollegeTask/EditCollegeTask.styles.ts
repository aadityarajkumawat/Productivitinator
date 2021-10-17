import styled from 'styled-components'
import { motion } from 'framer-motion'

export const EditCollegeTaskContainer = styled(motion.section)`
    width: 100%;
    background: #444444;
    border: 1px solid #989898;
    box-sizing: border-box;
    border-radius: 5px;

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
