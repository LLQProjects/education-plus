import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    // 组件挂载：vue：beforeCreate、created、beforeMount mounted --- 此阶段访问ajax
    componentDidMount() {

    }
    // 模版渲染
    render() {
        return (
            <div></div>
        )
    }
    //组件更新：vue：beforeUpdate、updated
    componentDidUpdate() {

    }
    // 组件销毁：vue：beforeDestroy、destroyed。销毁自定义事件 removeAddeventListener，定时器等 clearTimeout。
    componentWillUnmount() {

    }
    shouldComponentUpdate() {

    }
    eventTest = (tit, e) => {
        this.setState({
            count: 'fsdkljfs'
        })
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Test