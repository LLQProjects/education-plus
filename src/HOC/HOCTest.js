import React from 'react';

const HOCTest = (Component) => {
    return class extends React.Component {
        // 此处是组件的公共逻辑
        constructor(props) {
            super(props)
            this.state = {
                data: {}
            }
        }
        render() {
            return <Component data={this.state.data} {...this.props}></Component>
        }
    }
}
export default HOCTest;

