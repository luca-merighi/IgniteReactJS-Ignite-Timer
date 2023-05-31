import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Router from './Router'
import CyclesContextProvider from './context/CyclesContext'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </ThemeProvider>
  )
}