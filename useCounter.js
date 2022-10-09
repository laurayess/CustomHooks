import { useState } from "react";

export const useCounter=(initialState=10)=>{
    const [counter, setCounter] = useState(initialState);
    
    const incrementa=(value)=>{
        setCounter(counter+value);
    }

    const decrementa=()=>{
        if(counter===0)return;
        setCounter(counter-1);
    }

    const reset=()=>{
        setCounter(initialState);
    }


    return{
        counter,
        incrementa,
        decrementa,
        reset
    }
}