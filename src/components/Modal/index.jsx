import React from 'react';
import {Modal as AntdModal, Button} from 'antd';
import styles from './index.less'

export class Modal extends React.Component {
    render() {
        return (
            <div className={styles.modalDiv}>
                <AntdModal {...this.props}
                           getContainer={() => document.querySelector('.' + styles.modalDiv)}
                           footer={
                               <div>
                                   <div style={{clear: 'both', textAlign: 'left'}}>
                                       {this.props.tips}
                                   </div>
                                   <div style={{textAlign: 'center'}}>
                                       <Button
                                           key="ok" type="primary"
                                           loading={this.props.confirmLoading}
                                           onClick={this.props.handleOk}
                                           style={{marginRight: 20}}
                                           onClick={this.props.onOk}
                                       >
                                           {this.props.btn1Name ? this.props.btn1Name : '确定'}
                                       </Button>
                                       {this.props.btn2 !== false ?
                                           <Button key="cancel" onClick={this.props.onCancel}>
                                               {this.props.btn2Name ? this.props.btn2Name : '取消'}
                                           </Button>
                                           : ''}
                                   </div>
                               </div>

                           }
                >

                </AntdModal>
            </div>
        )
    }
}
