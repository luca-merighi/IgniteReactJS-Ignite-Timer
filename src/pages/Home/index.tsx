import { useContext } from 'react'
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {FormProvider} from 'react-hook-form'
import {CyclesContext} from '../../context/CyclesContext'

import {Play, HandPalm} from 'phosphor-react'

import Countdown from './Countdown'
import NewCycleForm from './NewCycleForm'

import { HomeContainer, StartCountdownButton, StopCountdownButton } from './styles'

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod.number()
        .min(1, 'O ciclo precisa ser de no mínimo 5 minutos!')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos!')
})

export default function Home() {
    const {createNewCycle, interruptCurrentCycle, activeCycle} = useContext(CyclesContext)
    
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    
    const {handleSubmit, watch, reset} = newCycleForm
    
    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }
    
    const task = watch('task')
    const isSubmitDisabled = !task
    
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
            
                <Countdown />
            
                {activeCycle ? (
                    <StopCountdownButton
                        type="button"
                        onClick={interruptCurrentCycle}>
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                        disabled={isSubmitDisabled}
                        type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}