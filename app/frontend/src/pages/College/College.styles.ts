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
