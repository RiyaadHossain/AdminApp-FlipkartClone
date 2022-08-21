import axios from "axios"
import store from "../Store/index"
import { apiConfiq } from "../apiConfiq"
import { authContants } from "../Actions/constants"

const token = window.localStorage.getItem("token")

const axiosAPI = axios.create({
    baseURL: apiConfiq,
    headers: {
        "Authorization": token ? `Bearer ${token}` : ""
    }
})

axiosAPI.interceptors.request.use(req => {
    const { auth } = store.getState()
    if (auth.token) return req.headers.Authorization = `Bearer ${auth.token}`
    return req
})

axiosAPI.interceptors.response.use(res => {
    return res
}, err => {
    const { status } = err.response
    if (status === 500 || status === 400) {
        localStorage.clear()
        store.dispatch({ type: authContants.LOGOUT_SUCCESS })
    }
    return Promise.reject(err)
})

export default axiosAPI