import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/'
})

export const getDwData = (api_url_tail) => {
    return axiosInstance.get('' + api_url_tail
    )    
};

//  To figure out how to create object to retrieve data for use elsewhere, cloned this concept.
//  https://www.youtube.com/watch?v=wlz8a9dd4wE