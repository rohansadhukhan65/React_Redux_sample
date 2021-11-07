 const changeNum = (state = 0, action) => {

    switch(action.type)
    {
        case 'INCRIMENT':
            return state +1
        case 'DECREMENT' :
            return state - 1
        default : return state
    }

}

export default changeNum