import React, { Component } from 'react'
import { Carousel, Image } from 'antd';


export default class index extends Component {
    render() {
        let { bannerList } = this.props
        return (
            <div>
                <Carousel autoplay dots={false} effect="fade">
                    {
                        bannerList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Image
                                        width={'100%'}
                                        src={item.imageUrl}
                                        preview={false}
                                    />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
