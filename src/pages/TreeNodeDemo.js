import styles from './index.css';
import {Modal} from '@/components/Modal'
import {TreeNode} from '@/components/TreeNode'
import {Tree} from 'antd'
import {Modal as AntModal} from 'antd'
import React from 'react'

export default class Demo extends React.Component {
    state = {
        modal1: true,
        modal2: true
    }
    test1 = (e) => {
        console.log('edit', e)
        // e.preventDefault()
    }
    test2 = (node) => {
        console.log('delete', node)
    }
    test3 = (node, edit) => {
        console.log('edit data', node, edit)
    }

    render() {
        return (
            <div className={styles.normal}>
                <Tree blockNode>
                    <TreeNode title={'节点标题2'}
                                      // handleClickEdit={this.test1}
                                      // handleClickDelete={this.test2}
                                      handleFinishEdit={this.test3}
                                      editable
                                      deletable
                    />
                </Tree>

            </div>
        );
    }

}
