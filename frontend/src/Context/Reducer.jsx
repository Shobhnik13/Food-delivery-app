export const actionType={
    SET_USER:'SET_USER'
}
const Reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case actionType.SET_USER:
            return {
                //keeping the whole staten as it is just updating the user data
                ...state,
                user:action.user, 
            };
            default:
            return state;
    }
}
export default Reducer;