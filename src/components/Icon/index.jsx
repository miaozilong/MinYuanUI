import React from 'react';
import {Icon as AntdIcon} from 'antd';
import TableEdit from './svg/table-edit.svg'


export class Icon extends React.Component {
    render() {
        let {component} = this.props;
        if (component) {
            if (typeof component === 'string') {
                //    外界传入了图标字符串 如tableEdit
                switch (component) {
                    case 'tableEdit':
                        return <AntdIcon {...this.props} component={TableEdit}  />
                }
            }
        }
        return (
            <AntdIcon {...this.props} />
        );
    }
}
