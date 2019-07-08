import styles from './index.css';
import {TableInformation} from '@/components/TableInformation'
import React from 'react'
import {connect} from 'dva';

@connect(({demo: {dataSource}, loading}) => ({dataSource, loading}))
export default class TableInformationDemo extends React.Component {
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            editable: true,
            width: 200
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch({type: 'demo/fetch', payload: {}})
    }


    handleSave(newRecord,) {
        console.log(newRecord)
    }

    handleOperate = () => {
        console.log('handleOperate')
    }

    render() {
        const {dataSource, loading} = this.props;
        const tableLoading = !!loading.effects['demo/fetch'];
        console.log(dataSource)
        return (
            <div className={styles.normal}>
                <TableInformation columns={this.columns} operationTitle='操作' handleSave={this.handleSave}
                                  dataSource={dataSource} handleOperate={this.handleOperate}
                                  loading={tableLoading}
                />
            </div>
        );
    }
}
