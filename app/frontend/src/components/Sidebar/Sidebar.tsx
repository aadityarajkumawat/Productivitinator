import { useHistory } from 'react-router-dom'
import { useQuery } from 'urql'
import { GET_USER } from '../../graphql/getUser'
import { GetUserQueryResponse } from '../../graphql/types'
import { ifDataFound } from '../../helpers/ifDataFound'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import {
    ProfileDetails,
    ProfileImage,
    ProfileTag,
    SidebarContainer,
    SidebarProfile,
} from './Sidebar.styles'

export function Sidebar() {
    let router = useHistory()
    let [{ data, fetching }] = useQuery<GetUserQueryResponse>({
        query: GET_USER,
    })

    function pushToTaskTracker() {
        router.push('/task-tracker')
    }

    function pushToCollege() {
        router.push('/college')
    }

    function pushToHome() {
        router.push('/')
    }

    return (
        <SidebarContainer>
            <SidebarProfile>
                <ProfileImage
                    onClick={pushToHome}
                    src='https://www.seekpng.com/png/detail/371-3719264_phineas-flynn3-phineas-and-ferb-cartoon-drawings.png'
                />
                <ProfileDetails>
                    <div>
                        {ifDataFound(data, fetching)
                            ? data!.getUser.user
                                ? data!.getUser.user.name
                                : ''
                            : ''}
                    </div>
                    <ProfileTag>
                        @
                        {ifDataFound(data, fetching)
                            ? data!.getUser.user
                                ? data!.getUser.user.username
                                : ''
                            : ''}
                    </ProfileTag>
                </ProfileDetails>
            </SidebarProfile>
            <SidebarItem onClick={pushToTaskTracker}>Task Tracker</SidebarItem>
            <SidebarItem onClick={pushToCollege}>College</SidebarItem>
        </SidebarContainer>
    )
}
