import React from 'react';
import {Button as AntButton} from 'antd';
import {Icon} from '../Icon'
import produce from 'immer'

import styles from './index.less'

export class Button extends React.Component {

    state = {
        className: 'btn',
        hover: false,
    }

    componentWillMount() {


    }

    handleMouseOver = (e) => {
        debugger
        this.setState(produce(draft => {
            draft.className = 'btnHover'
            draft.hover = true
        }))
    }

    handleMouseLeave = (e) => {
        debugger
        this.setState(produce(draft => {
            draft.className = 'btn'
            draft.hover = false
        }))
    }

    render() {
        const {icon} = this.props;
        let iconColor = this.state.hover ? '#ffffff' : '#005bac';
        console.log(iconColor)
        let iconElement = (
            <Icon
                component='tableEdit'
                style={{fontSize: 21, color: iconColor}}
            />
        )
        return (
            <>

                <AntButton {...this.props} className={styles[this.state.className]}
                           onMouseOver={this.handleMouseOver}
                           onMouseLeave={this.handleMouseLeave}
                >
                    {iconElement}
                    <span style={{transform: 'translateY(-3px)'}}>
                        {this.props.children}
                    </span>
                </AntButton>
            </>
        )
    }
}
