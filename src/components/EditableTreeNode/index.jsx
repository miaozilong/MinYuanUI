import React from 'react';
import {Tree as AntTree, Icon, Input} from 'antd';
import produce from 'immer'

const {TreeNode} = AntTree;

export class EditableTreeNode extends TreeNode {

    state = {
        iconDivDisplay: 'none',
        editing: false
    }

    handleClickEdit = e => {
        e.preventDefault()
        this.setState(produce(draft => {
            draft.editing = !draft.editing
        }))
        this.props.handleClickEdit(this)
    }
    handleClickDelete = e => {
        e.preventDefault()
        this.props.handleClickDelete(this)
    }
    handleShowIcon = () => {
        this.setState(produce(draft => {
            draft.iconDivDisplay = 'inline-block'
        }))
    }
    handleHideIcon = () => {
        this.setState(produce(draft => {
            draft.iconDivDisplay = 'none';
        }))
    }
    handleFinishEdit = (e) => {
        this.setState(produce(draft => {
            draft.editing = false
        }))
        this.props.handleHandleEdit(this, {newTitle: e.target.value})
    }
    handleKeyEditTitle = e => {
        if (e.keyCode === 13) {
            //    按了回车
            this.handleFinishEdit(e)
        }
    }

    render() {
        const {title: originTitle, editable, deletable} = this.props
        const title = (
            <>
                <div
                    onMouseOver={this.handleShowIcon}
                    onMouseLeave={this.handleHideIcon}
                    style={{textAlign: 'left'}}
                >
                    <div style={{width: 'calc(100% - 85px)', display: 'inline-block'}}>
                        {this.state.editing ? <Input size="small" style={{display: 'inline-block'}}
                                                     onKeyUp={this.handleKeyEditTitle}
                                                     defaultValue={originTitle}/> : originTitle}
                    </div>
                    <div style={{
                        float: 'right',
                        fontSize: 20,
                        textAlign: 'right',
                        display: this.state.iconDivDisplay,
                        width: 72
                    }}
                    >
                        {editable ?
                            <Icon onClick={this.handleClickEdit}
                                  type={this.state.editing ? 'check' : 'edit'}/>
                            : ''
                        }
                        {deletable ?
                            <Icon onClick={this.handleClickDelete} style={{marginLeft: 15}}
                                  type="delete"/>
                            : ''
                        }
                    </div>
                </div>
            </>
        )
        return (
            <>
                <TreeNode   {...this.props} title={title} blockNode/>
            </>
        )
    }
}
