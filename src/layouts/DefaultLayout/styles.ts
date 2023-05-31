import styled from 'styled-components'

export const LayoutContainer = styled.div`
    margin: 5rem auto;
    padding: 2.5rem;
    max-width: 74rem;
    height: calc(100vh - 10rem);
    
    background-color: ${props => props.theme['gray-800']};
    
    display: flex;
    flex-direction: column;
    
    border-radius: 8px;
`