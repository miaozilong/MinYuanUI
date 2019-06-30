import styles from './index.css';
import {Modal} from '@/components/Modal'
import {Modal as AntModal} from 'antd'
import React from 'react'

export default class Demo extends React.Component {
    state = {
        modal1: true,
        modal2: true
    }

    render() {
        return (
            <div className={styles.normal}>
                <Modal visible={this.state.modal1} tips={"test"} title={'asd'} onOk={() => console.log('ok')}
                       onCancel={() => this.setState({...this.state, modal1: false})}></Modal>
                <Modal visible={this.state.modal2} tips={"test"} title={'asd'} onOk={() => console.log('ok')}
                       onCancel={() => this.setState({...this.state, modal2: false})}></Modal>
                {/*<Modal visible={true} tips={"test"} title={'asd'}></Modal>*/}
                {/*<Modal visible={true} tips={"test"} title={'asd'}></Modal>*/}
                <AntModal visible={true} title={'aaa'} />
            </div>
        );
    }

}
