import React from 'react';
import {Tree as AntTree, Icon} from 'antd';
import produce from 'immer'

const {TreeNode} = AntTree;

export class EditableTreeNode extends TreeNode {

    state = {
        iconDivDisplay: 'none'
    }

    handleClickEdit = e => {
        e.preventDefault()
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

    render() {
        const {title: originTitle} = this.props
        const title = (
            <>
                <div
                    onMouseOver={this.handleShowIcon}
                    onMouseLeave={this.handleHideIcon}
                    style={{textAlign: 'left'}}
                >
                    {originTitle}
                    <div style={{float: 'right', fontSize: 20, display: this.state.iconDivDisplay}}
                    >
                        <Icon onClick={this.handleClickEdit} style={{marginRight: 15}} type="edit"/>
                        <Icon onClick={this.handleClickDelete}
                              type="delete"/>
                    </div>
                </div>
            </>
        )
        return (
            <>
                <TreeNode                  {...this.props} title={title}
                />
            </>
        )
    }
}
