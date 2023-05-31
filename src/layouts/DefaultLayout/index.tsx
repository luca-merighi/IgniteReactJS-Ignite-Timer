import {Outlet} from 'react-router-dom'

import Header from '../../component/Header'

import { LayoutContainer } from './styles'

export default function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}