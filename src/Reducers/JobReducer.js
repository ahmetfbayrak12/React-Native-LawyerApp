import { 
    MERCIES_FETCH_SUCCESS, 
    IL_ILCELER_FETCH_SUCCESS 
} from '../Actions/Types';

const INITIAL_STATE = {
    iller: {},
    il_ilceler: {},
    fetch_finished: false,
    ilce_fetch_finished: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MERCIES_FETCH_SUCCESS:
            return { ...state, iller: action.payload, fetch_finished: true };    
        case IL_ILCELER_FETCH_SUCCESS:
            return { ...state, il_ilceler: action.payload, ilce_fetch_finished: true };                       
        default:
            return state;
    }
}