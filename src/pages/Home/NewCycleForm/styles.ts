import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    
    color: ${props => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: 700;
`

const BaseInputStyle = styled.input`
    background-color: transparent;
    height: 2.5rem;
    padding: 0 0.5rem;
    
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
    
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    transition: border-color 0.3s;
    
    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
    
    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }
`

export const TaskInput = styled(BaseInputStyle)`
    flex: 1;
    
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const MinutesAmountInput = styled(BaseInputStyle)`
    width: 4rem;
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`