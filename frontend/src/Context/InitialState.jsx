import { fetchCart, fetchUser } from "../Utils/FetchLocaleStorageData"

const userInfo=fetchUser()
const cartInfo=fetchCart()

export const InitialState={
    user:userInfo,
    fooditems:null,
    cartShow:false,
    cartItems:cartInfo,
}