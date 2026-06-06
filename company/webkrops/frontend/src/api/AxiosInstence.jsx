import axios from 'axios'

const AxiosInstence = axios.create({
    baseURL: "",
    withCredentials: true
})

//for the resoponse

AxiosInstence.interceptors.response.use(
    (res) => { return res },
    (err) => {
        // chke the statuse if 401 tehn aain call and then the previous reqcall
        let originalRequest = err.config

        if (err.response.status == 401 && !originalRequest._retray) {
            originalRequest._retray = true
            try {
                await axios.post('http://localhost:3000/rotate')
                return AxiosInstence(originalRequest)
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }

)