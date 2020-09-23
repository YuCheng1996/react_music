import React, { Component } from 'react'
import { Card } from 'antd';

export default class Recommend extends Component {

    state = {
        loading: true
    }

    render() {
        const { Meta } = Card;
        let { name, copywriter, picUrl } = this.props
        const { loading } = this.state;
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={picUrl} />}
                    loading={loading}
                >
                    <Meta title={name} description={copywriter} />
                </Card>,
            </div>
        )
    }

    componentDidMount() {
        if (this.props && this.props.name) {
            this.setState({
                loading: false
            })
        }
    }
}
