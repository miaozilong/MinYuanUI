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
        const {icon, notext, children} = this.props;
        let childrenElement;
        if (!notext) {
            childrenElement = (<span style={{marginLeft: 3, marginRight:5,transform:'translateY(-3px)'}}>{children}</span>)
        }
        let iconColor = this.state.hover ? '#ffffff' : '#005bac';
        // console.log(iconColor)
        let iconElement = (
            <Icon
                component={icon}
                btnIcon
                style={{fontSize: 21, color: iconColor, transform: 'translateX(-3px)'}}
            />
        )
        return (
            <>

                <AntButton {...this.props} className={styles[this.state.className]}
                           onMouseOver={this.handleMouseOver}
                           onMouseLeave={this.handleMouseLeave}
                >
                    {iconElement}
                    {childrenElement}
                </AntButton>
            </>
        )
    }
}
