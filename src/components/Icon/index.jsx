import React from 'react';
import {Icon as AntdIcon} from 'antd';
import TableEdit from './svg/table-edit.svg'


export class Icon extends React.Component {

    state = {
        mouseOver: false
    }

    render() {
        let {component} = this.props;

        let IconElement;
        if (component) {
            if (typeof component === 'string') {
                //    外界传入了图标字符串 如tableEdit
                switch (component) {
                    case 'tableEdit':
                        IconElement = <AntdIcon {...this.props} component={TableEdit}/>
                }
            }
        } else {
            IconElement = <AntdIcon {...this.props}  />
        }
        return (
            <div style={}>
                {IconElement}
            </div>
        );
    }
}
