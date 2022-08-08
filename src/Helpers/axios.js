import axios from "axios"
import { apiConfiq } from "../apiConfiq"

const axiosAPI = axios.create({
    baseURL: apiConfiq,
    headers: {
        "Authorization": ""
    }
})

export default axiosAPI