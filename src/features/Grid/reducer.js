
const initialState = []

function gridReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TITLE':
            const nextId = state.length + 1
            const newTile = { id: nextId, color: action.color }
            return [...state, newTile]
        case 'REMOVE_TILE':
            return state.filter((tile) => tile.id !== action.id)
        default:
            return state;
    }
}

export default gridReducer