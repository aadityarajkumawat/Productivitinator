import { useHistory } from 'react-router-dom'
import { useQuery } from 'urql'
import { GET_USER } from '../../graphql/getUser'
import { GetUserQueryResponse } from '../../graphql/types'
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

    function ifDataFound(data: any, fetching: boolean) {
        if (!fetching && data && data[Object.keys(data)[0]]) {
            return true
        } else return false
    }

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
                <ProfileImage onClick={pushToHome} />
                <ProfileDetails>
                    <div>
                        {ifDataFound(data, fetching)
                            ? data!.getUser.user.name
                            : ''}
                    </div>
                    <ProfileTag>
                        @
                        {ifDataFound(data, fetching)
                            ? data!.getUser.user.username
                            : ''}
                    </ProfileTag>
                </ProfileDetails>
            </SidebarProfile>
            <SidebarItem onClick={pushToTaskTracker}>Task Tracker</SidebarItem>
            <SidebarItem onClick={pushToCollege}>College</SidebarItem>
        </SidebarContainer>
    )
}
