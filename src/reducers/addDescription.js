const initialState = {
    description: []
}

const addDescription = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DESCRIPTION':
            return { ...state, description: [...state.description, action.descriptionMaintenance] }
        default:
            state
    }
}

export default addDescription