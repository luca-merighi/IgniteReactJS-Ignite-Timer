import styled from 'styled-components'

export const HistoryContainer = styled.main`
    padding: 3.5rem;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    
    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme['gray-100']};
    }
`

export const HistoryList = styled.div`
    overflow: auto;
    margin-top: 2rem;
    
    flex: 1;
    
    table {
        width: 100%;
        min-width: 600px;
        border-collapse: collapse;
        
        th {
            background-color: ${props => props.theme['gray-600']};
            padding: 1rem;
            
            font-size: 0.875rem;
            line-height: 1.6;
            text-align: left;
            
            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            
            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }
        
        td {
            background-color: ${props => props.theme['gray-700']};
            padding: 1rem;
            
            font-size: 0.875rem;
            line-height: 1.6;
            text-align: left;
            
            border-top: 4px solid ${props => props.theme['gray-800']};
            
            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }
            
            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`

const StatusColors = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const

interface StatusProps {
    statusColor: keyof typeof StatusColors
} 

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        background-color: ${props => props.theme[StatusColors[props.statusColor]]};
        
        border-radius: 50%;
    }
`