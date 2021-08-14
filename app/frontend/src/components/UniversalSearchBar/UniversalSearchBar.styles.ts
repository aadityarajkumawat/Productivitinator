import styled from 'styled-components'

export const UniversalSearchBarContainer = styled.div`
    input {
        width: 600px;
        font-size: 18px;
        padding: 15px 20px;
        background: #595959;
        border: 2px solid #737373;
        box-sizing: border-box;
        border-radius: 5px;
        transition: all 0.3s ease-in;

        &:active {
            outline: none;
        }

        &:focus {
            outline: none;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25),
                -4px 0px 10px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease-in;
        }
    }
`
