import styles from './index.css';
import {TableInformation} from '@/components/TableInformation'
import React from 'react'

export default  class TableInformationDemo extends React.Component {
    columns = [
        {
            title:'名称',
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
    dataSource = [{
        key: 0,
        name: '测试名称',
        address: '测试地址',
    }]

    handleSave(newRecord,) {
        console.log(newRecord)
    }

    handleOperate = () => {
        console.log('handleOperate')
    }

    render() {
        return (
            <div className={styles.normal}>
                <TableInformation columns={this.columns} operationTitle='操作' handleSave={this.handleSave}
                                  dataSource={this.dataSource} handleOperate={this.handleOperate}
                />
            </div>
        );
    }
}
