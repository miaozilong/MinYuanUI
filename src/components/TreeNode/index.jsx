import React from 'react';
import {Tree as AntTree, Icon, Input} from 'antd';
import produce from 'immer'

const {TreeNode: AntTreeNode} = AntTree;

export class TreeNode extends AntTreeNode {

    state = {
        iconDivDisplay: 'none',
        editing: false,
        editText: ''
    }

    handleClickEdit = e => {
        e.preventDefault()
        this.setState(produce(draft => {
            draft.editing = !draft.editing
        }))
        if (this.props.handleClickEdit) {
            this.props.handleClickEdit(this);
        }
    }
    handleClickDelete = e => {
        e.preventDefault()
        if (this.props.handleClickDelete) {
            this.props.handleClickDelete(this);
        }
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
        if (this.props.handleFinishEdit) {
            this.props.handleFinishEdit(this, {newTitle: this.state.editText});
        }
    }
    handleKeyEditTitle = e => {
        if (e.keyCode === 13) {
            //    按了回车
            this.handleFinishEdit(e)
        }
    }

    changeText = (e) => {
        e.persist();
        this.setState(produce(draft => {
            draft.editText = e.target.value
        }))
    }

    render() {
        const {title: originTitle, editable, deletable} = this.props
        const {editing} = this.state;
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
                                                     onChange={this.changeText}
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
                        {editable && !editing ?
                            <Icon onClick={this.handleClickEdit}
                                  type='edit'/>
                            : ''
                        }
                        {editable && editing ?
                            <Icon onClick={this.handleFinishEdit}
                                  type='check'/>
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
                <AntTreeNode   {...this.props} title={title} blockNode/>
            </>
        )
    }
}
