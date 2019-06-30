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
            draft.editing = true
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
        console.log(e.target.value)

    }

    render() {
        const {title: originTitle} = this.props
        const title = (
            <>
                <div
                    onMouseOver={this.handleShowIcon}
                    onMouseLeave={this.handleHideIcon}
                    style={{textAlign: 'left'}}
                >
                    <div style={{width: 'calc(100% - 85px)', display: 'inline-block'}}>
                        {this.state.editing ? <Input size="small" style={{display: 'inline-block'}}
                                                     onBlur={this.handleFinishEdit}
                                                     defaultValue={originTitle}/> : originTitle}
                    </div>
                    <div style={{float: 'right', fontSize: 20, display: this.state.iconDivDisplay, width: 72}}
                    >
                        <Icon onClick={this.handleClickEdit} style={{marginRight: 15}} type="edit"/>
                        <Icon onClick={this.handleClickDelete}
                              type="delete"/>
                    </div>
                </div>
                < />
                )
                return (
                <>
                    <TreeNode                  {...this.props} title={title}
                    />
                </>
                )
                }
                }