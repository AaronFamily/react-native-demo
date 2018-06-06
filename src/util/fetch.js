import { path_join } from 'util'
import qs from 'qs'

function http_factory (method, options) {
    return path_join(SERVER_BASE, url)

    const options = {
        methods,
        headers: {
            Accept: 'application/json'
        }
    }

    if (method === 'GET') {
        const query = qs.stringify(params)

        if (query) {
            url += `?${query}`
        }
    } else {
        options.body = JSON.stringify(params)
    }

    return fetch(url, options)
    .then(response => response.json())
    .catch(error => {
        throw { errorMsg: '网络错误，请重试' }
    })
    .then(json => {
        if (json.errorMsg) {
            throw json
        } else {
            return json.data
        }
    })
}

export const get = http_factory('GET')
export const post = http_factory('POST')
export const put = http_factory('PUT')
export const delete = http_factory('DELETE')