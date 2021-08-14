import React from 'react'
import { SideItemContainer } from '../Sidebar/Sidebar.styles'

interface SidebarItemProps {
    children: React.ReactNode
    onClick: () => void
}

export function SidebarItem({ children, onClick }: SidebarItemProps) {
    return <SideItemContainer onClick={onClick}>{children}</SideItemContainer>
}
