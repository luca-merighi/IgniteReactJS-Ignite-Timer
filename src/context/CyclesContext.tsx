import { createContext, useState, ReactNode, useReducer, useEffect } from 'react'
import CyclesReducer, {Cycle} from '../reducers/cycles/reducers'
import { AddNewCycleAction, InterruptCurrentCycleAction, MarkCurrentCycleAsFinishedAction } from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
    task: string,
    minutesAmount: number,
}

interface CyclesContextData {
    cycles: Cycle[],
    activeCycle: Cycle | undefined,
    activeCycleId: string | null,
    markCurrentCycleAsFinished: () => void,
    amountSecondsPassed: number,
    setSecondsPassed: (seconds: number) => void,
    createNewCycle: (data: CreateCycleData) => void,
    interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps {
    children: ReactNode
}

export default function CyclesContextProvider(props: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(CyclesReducer, {
        cycles: [],
        activeCycleId: null
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('ignite-timer-cycles-state')
        if(storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }
        
        return initialState
    })
    
    const {cycles, activeCycleId} = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(
        () => {
            if(activeCycle) {
                return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
            }
            return 0   
        }
    )
    
    function markCurrentCycleAsFinished() {
        dispatch(MarkCurrentCycleAsFinishedAction())
    }
    
    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }
    
    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }
        
        dispatch(AddNewCycleAction(newCycle))
        
        setAmountSecondsPassed(0)
    }
    
    function interruptCurrentCycle() {
        dispatch(InterruptCurrentCycleAction())
    }
    
    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)
        localStorage.setItem('ignite-timer-cycles-state', stateJSON)
    }, [cyclesState])
    
    return (
        <CyclesContext.Provider value={{
            cycles,
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle
        }}>
            {props.children}
        </CyclesContext.Provider>
    )
}