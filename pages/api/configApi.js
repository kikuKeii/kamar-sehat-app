//https://rs-bed-covid-api.vercel.app/
import axios from "axios";

const baseAPI = `https://rs-bed-covid-api.vercel.app/api`

export const getProvince = async () => {
    const province = await axios.get(`${baseAPI}/get-provinces`)
    return province.data.provinces
}

export const getCity = async (id) => {
    const city = await axios.get(`${baseAPI}/get-cities?provinceid=${id}`)
    return city.data.cities
}

export const getDataRS = async (idProv, idCity) => {
    const rs = await axios.get(`${baseAPI}/get-hospitals?provinceid=${idProv}&cityid=${idCity}&type=1`)
    return rs.data.hospitals
}

// export const searchMovie = async (q) => {
//     const search = await axios.get(`${baseURL}/search/movie?page=1&query=${q}&api_key=${api}`)
//     return search.data
// }