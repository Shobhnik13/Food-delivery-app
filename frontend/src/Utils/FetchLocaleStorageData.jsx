export const fetchUser=()=>{
    const userData=localStorage.getItem('user')!=='undefined'?
    JSON.parse(localStorage.getItem('user'))
    :localStorage.clear()

return userData;
}
export const fetchCart=()=>{
    const userCart=localStorage.getItem('cartItems')!=='undefined'?
    JSON.parse(localStorage.getItem('cartItems'))
    :localStorage.clear()

return userCart?userCart:[];
}
