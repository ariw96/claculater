import {ACTIONS} from './App'
export default function OpertionButton({dispatch,operation}){
    return  (
    <button
     onClick={()=>dispatch({type:ACTIONS.CHOOES_OPERATION,payload:{operation}})}
     > 
    {operation}
    </button>
    )
}