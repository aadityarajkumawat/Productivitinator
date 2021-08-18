import styled from 'styled-components'

export const DeleteModalContainer = styled.div`
    width: 400px;
    padding: 10px;
    background: #444444;
    border: 1px solid #989898;
    box-sizing: border-box;
    border-radius: 5px;

    p {
        margin-bottom: 20px;
    }

    div {
        justify-content: flex-end;
        button {
            padding: 4px 12px;
            background: linear-gradient(
                180deg,
                #ff4949 0%,
                #ff6969 0.01%,
                #ff4a4a 100%
            );
            border-radius: 3px;
            cursor: pointer;
        }
    }
`
