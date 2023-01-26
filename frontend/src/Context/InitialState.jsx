import { fetchUser } from "../Utils/FetchLocaleStorageData"

const userInfo=fetchUser()


export const InitialState={
    user:userInfo,
    fooditems:null,
}