
const numberReducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return state + action.val
        case 'Decrement':
            return state - action.val

    }
}
export default numberReducer;