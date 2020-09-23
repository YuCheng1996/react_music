import React, { Component } from 'react'
import axios from '@/request/request'
import './index.scss'
import Banner from '@/static/Banner/index'
import Recommend from './Recommend'

export default class Discovery extends Component {

    state = {
        // 轮播图数组
        bannerList: [],
        // 推荐歌单
        recommendList: [],
    }

    render() {
        let { bannerList, recommendList } = this.state
        return (
            <div>
                <Banner bannerList={bannerList} />
                <div className="recommendBox">
                    <span className="title">推荐音乐</span>
                    <div className="recommend">
                        {
                            recommendList.map((item, index) => {
                                return (

                                    <Recommend key={index} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    // 获取轮播图
    getBanners() {
        axios.getAction('/banner').then(res => {
            if (res.data.code === 200) {
                this.setState({
                    bannerList: res.data.banners
                })
            }
        })
    }

    getRecommendList() {
        axios.getAction('/personalized').then(res => {
            console.log(res)
            if (res.data.code === 200) {
                this.setState({
                    recommendList: res.data.result
                })
            }
        })
    }



    componentDidMount() {
        this.getBanners()
        this.getRecommendList()
    }
}
