import React from 'react';
import {Icon as AntdIcon} from 'antd';
import TableEdit from './svg/table-edit.svg'

export class Icon extends React.Component {
    componentWillMount() {
        const {component} = this.props;
        // const {svg, component} = this.props;
        // if (svg && component) {
        //     throw new Error('不能同时传入svg和component属性')
        //     return;
        // }
        // if (svg) {
        //     switch (svg) {
        //         case 'table'
        //
        //     }
        // }
        if (component) {
            if (typeof component === 'string') {
                //    外界传入了图标字符串 如tableEdit
                switch (component) {
                    case 'tableEdit':
                            this.component = ()=> TableEdit
                        break;
                }
            }
        }
    }

    render() {
        const {component} = this.props;
        return (
            <AntdIcon {...this.props} component={this.component}/>
        )
    }
}
