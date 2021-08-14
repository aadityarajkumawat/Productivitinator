import { useHistory } from 'react-router-dom'
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

    function pushToTaskTracker() {
        router.push('/task-tracker')
    }

    function pushToCollege() {
        router.push('/college')
    }

    return (
        <SidebarContainer>
            <SidebarProfile>
                <ProfileImage />
                <ProfileDetails>
                    <div>Aditya Raj Kumawat</div>
                    <ProfileTag>@aditya</ProfileTag>
                </ProfileDetails>
            </SidebarProfile>
            <SidebarItem onClick={pushToTaskTracker}>Task Tracker</SidebarItem>
            <SidebarItem onClick={pushToCollege}>College</SidebarItem>
        </SidebarContainer>
    )
}
