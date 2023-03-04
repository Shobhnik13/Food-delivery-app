export const actionType={
    SET_USER:'SET_USER',
    SET_FOOD_ITEMS:'SET_FOOD_ITEMS',
    SET_CART_SHOW:'SET_CART_SHOW',
    SET_CART_ITEMS:'SET_CART_ITEMS',
}
const Reducer=(state,action)=>{
    switch(action.type){
        case actionType.SET_USER:
            return {
                //keeping the whole state as it is just updating the user data
                ...state,
                user:action.user, 
            };
            case actionType.SET_FOOD_ITEMS:
                return{
                       //keeping the whole state as it is just updating the fooditems data
                    ...state,
                    fooditems:action.fooditems,
                };
            case actionType.SET_CART_SHOW:
                return{
                    //keeping whole state same but updating cart show
                    ...state,
                    cartShow:action.cartShow,
                };
                case actionType.SET_CART_ITEMS:
                    return{
                        //whole state same update cart items
                        ...state,
                        cartItems:action.cartItems,
                    }
            default:
            return state;
    }
}
export default Reducer;