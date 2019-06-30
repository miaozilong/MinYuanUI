import React from 'react';
import {Modal as AntdModal, Button} from 'antd';
import styles from './index.less'

export class Modal extends React.Component {
    render() {
        return (
            <div>
                <AntdModal {...this.props}
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
                                       >
                                           {this.props.btn1Name ? this.props.btn1Name : '确定'}
                                       </Button>
                                       {this.props.btn2 !== false ?
                                           <Button key="cancel" onClick={this.props.handleCancel}>
                                               取消
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
