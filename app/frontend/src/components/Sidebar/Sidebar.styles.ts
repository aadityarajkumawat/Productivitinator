import styled from 'styled-components'

export const SidebarContainer = styled.div`
    width: 300px;
    height: 100vh;
    background: linear-gradient(
        225.61deg,
        #444444 10.08%,
        #484848 52.85%,
        #414141 95.13%
    );
`

export const SidebarProfile = styled.div`
    width: 100%;
    padding: 30px 20px;
    display: flex;
    align-items: center;
`
export const ProfileImage = styled.img`
    width: 95px;
    height: 95px;
    border-radius: 5px;
`
export const ProfileDetails = styled.div`
    display: flex;
    margin-left: 20px;
    height: 95px;
    flex-direction: column;
    justify-content: space-between;

    div {
        font-size: larger;
    }
`

export const ProfileTag = styled.span`
    width: 90px;
    padding: 2px 0;
    background: #0085ff;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
`

export const SideItemContainer = styled.button`
    width: 100%;
    padding: 9px 20px;
    background: rgba(166, 166, 166, 0.6);
    text-align: left;
    font-size: 15px;
    margin-top: 1px;
`
