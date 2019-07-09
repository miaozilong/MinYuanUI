import React from 'react';
import {Divider as AntdDivider} from 'antd';
import styles from './index.less'

export class Divider extends React.Component {
    render() {
        return (
            <div className={styles.minyuanDivider}>
                <AntdDivider {...this.props}  >{this.props.children}</AntdDivider>
            </div>
        )
    }
}
