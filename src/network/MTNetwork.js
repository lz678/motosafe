import axios from '../request/index'
const MTFetch = (url) => {
    // let URL = 'http://www.motosafe.xyz:3000' + url
    let URL = url
    return fetch(URL, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
export default {
    // addInfoFetch: async (data) => {
    //     let response = await MTFetch(`http://www.motosafe.xyz:3000/add?name=${data.name}&car=${data.car}&phone=${data.phone}`)
    //     console.log(response)
    //     if (response && response.ok) {
    //         return await response.json()
    //     } else {
    //         throw new Error(response.statusText);
    //     }
    // },
    addInfoFetch: (data) => {
        return axios.post('/add', data)
    },
    addCount :()=>{
        return axios.post('/addCount')
    }
}