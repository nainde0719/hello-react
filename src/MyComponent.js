import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    
    static defaultProps = {
        name: '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정
        age: PropTypes.number.isRequired // 필수적으로 존재하며, 숫자이다.
    }

    constructor(props) {
        super(props);
        this.state = {
            number:0
        }
    }

    render() {
        return (
            <div>
                <p>안녕하세요 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자: {this.state.number}</p>
            </div>
        )
    }
}

export default MyComponent;