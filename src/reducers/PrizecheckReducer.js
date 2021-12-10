export function PrizecheckReducer(state=null,action){
    switch(action.type){
        case 'CHECK':
            return action.payload
        default:
            return state;
    }
}