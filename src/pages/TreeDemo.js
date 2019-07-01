import styles from './index.css';
import {Tree} from '@/components/Tree'
import React from 'react'

export default class Demo extends React.Component {
    treeNodeData = [
        {
            key: '0', title: '中国', isLeaf: false, children: [
                {key: '11', title: '北京', editable: true, isLeaf: true},
                {
                    key: '32', title: '江苏', isLeaf: false, children: [
                        {key: '3206', title: '南通', isLeaf: true, deletable: true}
                    ]
                }
            ]
        }, {
            key: '1', title: '美国', isLeaf: true
        }
    ];

    render() {
        return (
            <div className={styles.normal}>
                <Tree blockNode treeNodeData={this.treeNodeData}/>
            </div>
        );
    }

}
