import styles from './index.css';
import {Tree} from '@/components/Tree'
import React from 'react'
import {connect} from 'dva';
import {Spin} from 'antd'

// @connect(({demo: {treeNodeData}, loading}) => (treeNodeData, loading))
@connect(({demo: {treeNodeData}, loading}) => ({treeNodeData, loading}))
export default class Demo extends React.Component {
    // treeNodeData = [
    //     {
    //         key: '0', title: '中国', isLeaf: false, children: [
    //             {key: '11', title: '北京', editable: true, isLeaf: true},
    //             {
    //                 key: '32', title: '江苏', isLeaf: false, children: [
    //                     {key: '3206', title: '南通', isLeaf: true, deletable: true}
    //                 ]
    //             }
    //         ]
    //     }, {
    //         key: '1', title: '美国', isLeaf: true
    //     }
    // ];
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch({type: 'demo/fetch', payload: {}})
    }

    render() {
        const {treeNodeData, loading} = this.props;
        // const loading2 = !!loading.effects['demo/fetch']
        const tableLoading = !!loading.effects['demo/fetch'];
        debugger
        return (
            <div className={styles.normal}>
                <Tree blockNode treeNodeData={treeNodeData} loading={tableLoading}/>
            </div>
        );
    }

}
