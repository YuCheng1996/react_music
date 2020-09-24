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
                {/* 轮播图 */}
                <Banner bannerList={bannerList} />
                {/* 推荐音乐 */}
                <div className="recommendSongFrom">
                    <span className="title">推荐歌单</span>
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

                {/* 推荐歌单 */}
                <div className="recommendSong">
                    <span className="title">推荐音乐</span>
                    <div>

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

    // 获取推荐歌单
    getRecommendSongFromList() {
        axios.getAction('/personalized', {
            limit: 7
        }).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    recommendList: res.data.result
                })
            }
        })
    }

    // 获取推荐音乐
    getRecommendSongList() {
        axios.getAction('/personalized/newsong').then(res => {
            console.log(res)
        })
    }



    componentDidMount() {
        this.getBanners()
        this.getRecommendSongFromList()
        this.getRecommendSongList()
    }
}
