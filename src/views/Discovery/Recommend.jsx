import React, { Component } from 'react'

export default class Recommend extends Component {

  

    render() {
        let { name, picUrl } = this.props
        return (
            <div className="recommendItem">
                <div className="recommendItem_img">
                    <img src={picUrl} alt="" />
                </div>
                <div className="recommendItem_span">
                    <span>{name}</span>
                </div>
            </div>
        )
    }
}
