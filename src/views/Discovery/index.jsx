import React, { Component } from 'react'
import axios from '@/request/request'
import Banner from '@/static/Banner/index'


export default class Discovery extends Component {

    state = {
        bannerList: []
    }

    render() {
        let { bannerList } = this.state
        return (
            <div>
                <Banner bannerList={bannerList} />
                
            </div>
        )
    }

    getBanners() {
        axios.getAction('/banner').then(res => {
            if (res.data.code === 200) {
                console.log(res)
                this.setState({
                    bannerList: res.data.banners
                })
            }
        })
    }

    componentDidMount() {
        this.getBanners()
    }
}
