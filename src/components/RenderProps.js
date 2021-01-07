import React from 'react'
class Factory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            renderData: {}
        }
    }
    render() {
        return <div>{this.props.render(this.state)}</div> //函数的执行结果在此渲染
    }
}
// 使用：
{/* <Factory render={
    (props) => {
        return <div>{props.renderData}</div>
    }
} /> */}
