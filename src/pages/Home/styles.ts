import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
        align-items: center;
    }
`

export const BaseCountdownButtonStyle = styled.button`
    width: 100%;
    padding: 1rem;
    
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
    
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const StartCountdownButton = styled(BaseCountdownButtonStyle)`
    background-color: ${props => props.theme['green-500']};
    
    &:not(:disabled):hover {
        background-color: ${props => props.theme['green-700']};
    }
`

export const StopCountdownButton = styled(BaseCountdownButtonStyle)`
    background-color: ${props => props.theme['red-500']};
    
    &:not(:disabled):hover {
        background-color: ${props => props.theme['red-700']};
    }
`