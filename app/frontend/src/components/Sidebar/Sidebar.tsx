import { SidebarItem } from '../SidebarItem/SidebarItem'
import {
    ProfileDetails,
    ProfileImage,
    ProfileTag,
    SidebarContainer,
    SidebarProfile,
} from './Sidebar.styles'

export function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarProfile>
                <ProfileImage />
                <ProfileDetails>
                    <div>Aditya Raj Kumawat</div>
                    <ProfileTag>@aditya</ProfileTag>
                </ProfileDetails>
            </SidebarProfile>
            <SidebarItem>Task Tracker</SidebarItem>
            <SidebarItem>College</SidebarItem>
        </SidebarContainer>
    )
}
