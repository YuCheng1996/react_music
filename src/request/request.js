import axios from 'axios'
import HTTPCONFIG from './http_config/request_config'

const request = axios.create({
    baseURL: HTTPCONFIG.bast_url,
    timeout: HTTPCONFIG.time_out,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

})

export default {
    getAction(url, param) {
        return new Promise((resolve, reject) => {
            request({
                method: 'get',
                url,
                params: param,
            }).then(res => {  //axios返回的是一个promise对象
                resolve(res)  //resolve在promise执行器内部 
            }).catch(err => {
                console.log(err, '异常')
            })
        })
    },

    postAction(url, param) {
        return new Promise((resolve, reject) => {
            request({
                method: 'post',
                url,
                data: param,
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err, '异常')
            })
        })
    }
}