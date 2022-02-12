import * as ActionTypes from './ActionTypes'

export const Partners = (state = {
                        isLoading: true,
                        errMess: null, 
                        partners:[] 
                    }, action ) => {
    switch (action.type){
        case ActionTypes.ADD_PARTNERS:
            console.log('in ADD_Partners');
            return{...state, isLoading: false, errMess:null, partners: action.payload};
        case ActionTypes.PARTNERS_LOADING:
            console.log('in Partners_LOADING');
            return{...state, isLoading: true, errMess:null, partners: []};
        case ActionTypes.PARTNERS_FAILED:
            return{...state, isLoading: false, errMess:action.payload};
        default:
        return state;
    }
};