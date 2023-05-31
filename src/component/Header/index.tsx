import {Timer, Scroll} from 'phosphor-react'
import {NavLink} from 'react-router-dom'

import logoIgnite from '/ignite-icon.svg'

import { HeaderContainer } from './styles'

export default function Header() {
    return (
        <HeaderContainer>
            <img 
            src={logoIgnite} 
            alt="Logo Ignite" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}