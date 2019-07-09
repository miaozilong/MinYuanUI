import styles from './index.css';
import {Modal} from '@/components/Modal'
import React from 'react'

export default class ModalDemo extends React.Component {


    render() {
        return (
            <div className={styles.normal}>
                <Modal visible={true} title={'测试标题'}>
                    测试内容
                </Modal>
            </div>
        );
    }

}
