export const todoReducer=(initialState=[],action={})=>{
    switch (action.type) {
        case '[TODO] Add todo':
        return [...initialState, action.payload]

        case '[TODO] Remove todo':
        return initialState.filter(todo=>{
            if(todo.id!==action.payload) return todo
        })

        case '[TODO] Toggle todo':
        return initialState.map(todo=>{
            if(todo.id===action.payload) return {...todo,done:!todo.done}
            return todo
        })

        case 'ABC':            
            throw new Error('Action.type=ABC no esta implementada')
    
        default:
            return initialState;
    }
}