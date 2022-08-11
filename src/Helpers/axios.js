import axios from "axios"
import { apiConfiq } from "../apiConfiq"

const token = window.localStorage.getItem("token")

const axiosAPI = axios.create({
    baseURL: apiConfiq,
    headers: {
        "Authorization": token ? `Bearer ${token}` : ""
    }
})

export default axiosAPI