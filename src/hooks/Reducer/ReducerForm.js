
export const initialState = {
    username: "",
    email: "",
    notes: "",
};

export  const reducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return {...state, [action.field]: action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
};