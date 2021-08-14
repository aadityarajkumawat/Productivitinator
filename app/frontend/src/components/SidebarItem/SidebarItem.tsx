import React from 'react'
import { SideItemContainer } from '../Sidebar/Sidebar.styles'

export function SidebarItem({ children }: { children: React.ReactNode }) {
    return <SideItemContainer>{children}</SideItemContainer>
}
