import { useContext } from 'react'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import {useFormContext} from 'react-hook-form'
import { CyclesContext } from '../../../context/CyclesContext'

export default function NewCycleForm() {
    const {activeCycle} = useContext(CyclesContext)
    const {register} = useFormContext()
    
    return (
        <FormContainer>
            <label htmlFor="task">
                Vou trabalhar em
            </label>
            <TaskInput 
                id="task"
                type="text"
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                disabled={!!activeCycle}
                {...register('task')} />
                
            <datalist id="task-suggestions">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
            </datalist>
            
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput 
                id="minutesAmount"
                type="number" 
                placeholder="5"
                // step={5}
                min={1} max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', {valueAsNumber: true})} />
            
            <span>minutos.</span>
        </FormContainer>
    )
}