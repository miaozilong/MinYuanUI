import React from 'react';
import {Icon as AntdIcon} from 'antd';

import produce from 'immer';
import {SvgComponent} from './SvgComponent'

export class Icon extends React.Component {

    state = {
        mouseOver: false,
        originColor: '#8f9599',
        originFontSize: 12,
        style: {
            color: '#8f9599',
            fontSize: '12'
        }
    }

    componentWillMount() {
        const {style} = this.props;
        this.setState(produce(draft => {
            if (style) {
                if (style.color) {
                    draft.style.color = style.color;
                    draft.originColor = style.color;
                }
                if (style.fontSize) {
                    draft.style.fontSize = style.fontSize;
                    draft.originFontSize = style.fontSize;
                }
            }
        }))
    }

    handleMouseOver = () => {
        this.setState(produce(draft => {
            draft.style.color = '#005bac'   // 鼠标放上来的时候变色
            // draft.style.fontSize = this.state.originFontSize * 1.2  // 鼠标放上来的时候大
        }))
    }
    handleMouseLeave = () => {
        this.setState(produce(draft => {
            draft.style.color = this.state.originColor   // 鼠标移开的时候变色
            draft.style.fontSize = this.state.originFontSize
        }))
    }


    render() {
        let {component, focuschange, style, btnIcon} = this.props;
        if (!btnIcon) {
            style = this.state.style;
        }
        let IconElement;
        if (component) {
            if (typeof component === 'string') {
                //    外界传入了图标字符串 如tableEdit

                IconElement = <AntdIcon {...this.props} component={SvgComponent[component]} style={style}
                                        onMouseOver={focuschange ? this.handleMouseOver : void (0)}
                                        onMouseLeave={focuschange ? this.handleMouseLeave : void (0)}/>
            }
        } else {
            IconElement = <AntdIcon {...this.props}  />
        }
        return (
            <span style={{cursor: "pointer", lineHeight: '1', marginRight: 3}}>
                {IconElement}
            </span>
        );
    }
}

